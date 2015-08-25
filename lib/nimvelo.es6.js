'use strict';

// Module dependencies

var request = require('request');
var extend = require('deep-extend');

// Package version
var VERSION = require('../package.json').version;

class Nimvelo {

  constructor(options) {

    this.VERSION = VERSION;

    var authorization;

    if (options.username && options.password) {

      // If we've got the credentials then encode and format them
      var encodedAuth = new Buffer(options.username + ':' + options.password).toString('base64');

      authorization = 'Basic ' + encodedAuth;

    }

    // Merge the default options with the client submitted options
    this.options = extend({
      username: null,
      password: null,
      customer: 'me',
      restBase: 'https://pbx.sipcentric.com/api/v1/customers/',
      streamBase: 'https://pbx.sipcentric.com/api/v1/stream',
      json: true,
      requestOptions: {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': authorization
        }
      }
    }, options);

    // Build a request object
    this.request = request.defaults(
      extend(
        // Pass the client submitted request options
        this.options.requestOptions
      )
    );

  }


  _buildUrl(base, type, id) {

    // Build the url based on the base and the type

    var bases = {
      'rest': this.options.restBase,
      'stream': this.options.streamBase
    };

    var baseUrl = (bases.hasOwnProperty(base)) ? bases[base] : bases.rest;
    var path;

    type = type.toLowerCase();

    switch (type) {
      case 'customers':
        break;
      case 'customer':
        if (!id) {
          // Only add default customer if no id is provided
          path = this.options.customer;
        }
        break;
      case 'callbundles':
      case 'calls':
      case 'creditstatus':
      case 'endpoints':
      case 'phonebook':
      case 'outgoingcallerids':
      case 'phonenumbers':
      case 'recordings':
      case 'sms':
      case 'sounds':
      case 'timeintervals':
        path = this.options.customer + '/' + type;
        break;
      default:
        path = this.options.customer + '/' + type;
        break;
    }

    var url = baseUrl;

    if (path) {
      url += path + '/';
    }

    if (id) {
      url += id + '/';
    }

    return url;

  }


  _request(method, resource, id, params, callback) {

    var base = 'rest';
    var options;
    var body;

    method = method.toLowerCase();

    if (method === 'get') {

      if (typeof id === 'string' || typeof id === 'number') {

        // * * "" ? ?

        if (typeof params === 'object') {

          // * * "" {} -
          // * * "" {} f()

          // Expected input format, don't need to do anything

        } else if (typeof params === 'function') {

          // * * "" f() -

          // No params provided

          callback = params;
          params = {};

        } else {

          // * * "" - -

          // No id, params, or callback provided

          callback = null;
          params = {};
          id = null;

        }

      } else if (typeof id === 'object') {

        if (typeof params === 'function') {

          // * * {} f() -

          // No id provided, params and function provided

          callback = params;
          params = id;
          id = null;

        } else {

          // * * {} - -

          // No id or callback provided, params provided

          callback = null;
          params = id;
          id = null;

        }

      } else if (typeof id === 'function') {

        // * * f() - -

        // No params or id provided, callback provided

        callback = id;
        params = {};
        id = null;

      } else {

        // * * - - -

        id = null;
        params = {};
        callback = null;

      }

      // Build the options to pass to our custom request object
      options = {
        method: 'get',
        url: this._buildUrl(base, resource, id), // Generate url,
        qs: params
      };

    } else if (method === 'put') {

      // If we're PUTting, the params become the body

      // * * "" {} f()

      body = params;

      options = {
        method: 'put',
        url: this._buildUrl(base, resource, id), // Generate url
        json: body
      };

    } else if (method === 'post') {

      // If we're POSTting, the params become the body

      // * * {} f() -

      callback = params;
      params = id;
      id = null;

      body = params;

      options = {
        method: 'post',
        url: this._buildUrl(base, resource), // Generate url
        json: body
      };

    } else if (method === 'delete') {

      // If we're DELETEting we only need the id and callback

      // * * "" f() -

      callback = params;
      params = {};

      options = {
        method: 'delete',
        url: this._buildUrl(base, resource, id) // Generate url
      };

    }

    this.request(options, function(error, response, data) {

      if (error) {

        // If there's an error, return our callback
        callback(error, data, response);

      } else {

        try {
          // Try to parse the returned data

          if (data && typeof data === 'string') {
            data = JSON.parse(data);
          }

        } catch(parseError) {
          // If we can't parse it, return our callback

          callback(
            new Error('Error parsing JSON. Status Code: ' + response.statusCode),
            data,
            response
          );
        }

        if (typeof data.errors !== 'undefined') {

          // If there's some errors returned

          callback(data.errors, data, response);

        } else if ((method === 'get' && response.statusCode !== 200) ||
          (method === 'put' && response.statusCode !== 200) ||
          (method === 'post' && response.statusCode !== 201) ||
          (method === 'delete' && response.statusCode !== 204)) {

          // If we don't get the correct status back for the method

          callback(
            new Error('Status Code: ' + response.statusCode),
            data,
            response
          );

        } else {

          // If we've got this far, then theres no errors

          callback(null, data, response);

        }

      }

    });

  }


  _buildObjects(items) {

    var classArray = [];
    var self = this;

    function getObject(item) {

      var object;

      // Figure out which class to use for this type

      switch (item.type) {
        case 'customer':
          object = new Customer(self.options, item);
          break;
        case 'phonebookentry':
          object = new Phonebookentry(self.options, self, item);
          break;
      }

      return object;

    }

    if (Array.isArray(items)) {

      // We've got an array of objects

      items.forEach(function(item) {

        classArray.push( getObject(item) );

      });

      return classArray;

    } else {

      // We just have a single object

      return getObject(items);

    }


  }


  customers(id, callback) {

    var self = this;

    if (typeof id === 'function') {

      // If we've not got an id then set it to 'me'

      callback = id;
      id = null;

    }

    return this._request('get', 'customers', id, function(err, data, response) {

      if (!callback) {
        return;
      }

      if (err) {
        callback(err, data, response);
        return;
      }

      var customers = data.items ? data.items : data;

      callback(null, self._buildObjects(customers), response);

    });

  }


  customer(callback) {

    // Alias this.customers but passes 'me' as id
    this.customers('me', callback);

  }

}


class Customer extends Nimvelo {

  constructor(options, item) {

    super(options);

    this.data = this.data || {};
    this.data.customer = this.data.customer || {};

    this.type = 'customer';
    this.data.customer.type = 'customer';
    this.data.customer.id = item.id;
    this.data.customer.uri = item.uri;
    this.data.customer.created = item.created;
    this.data.customer.company = item.company;
    this.data.customer.firstName = item.firstName;
    this.data.customer.lastName = item.lastName;
    this.data.customer.telephone = item.telephone;
    this.data.customer.email = item.email;
    this.data.customer.address1 = item.address1;
    this.data.customer.address2 = item.address2;
    this.data.customer.city = item.city;
    this.data.customer.postcode = item.postcode;

  }


  _getResource(type) {

    var resource;

    switch (type) {
      case 'customer':
        resource = 'customer';
        break;
      case 'phonebookentry':
        resource = 'phonebook';
        break;
    }

    return resource;

  }


  phonebook(id, callback) {

    var self = this;

    if (typeof id === 'function') {

      // If we've not got an id then set it to null

      callback = id;
      id = null;

    }

    return this._request('get', 'phonebook', id, function(err, data, response) {

      if (!callback) {
        return;
      }

      if (err) {
        callback(err, data, response);
        return;
      }

      var phonebook = data.items ? data.items : data;

      callback(null, self._buildObjects(phonebook), response);

    });

  }


  save(callback) {

    var self = this;

    var type = this.type;
    var resource = this._getResource(type);

    var requestCallback = function(err, data, response) {

      if (!callback) {
        return;
      }

      if (err) {
        callback(err, data, response);
        return;
      }

      // Update our object with the newly returned propreties
      self.data[type] = extend(self.data[type], data.items ? data.items : data);

      // Pass our newly updated object to the callback
      callback(null, self, response);

    };

    if (this.data[type].id) {

      return this._request('put', resource, this.data[type].id, this.data[type], requestCallback);

    } else {

      return this._request('post', resource, this.data[type], requestCallback);

    }

  }


  delete(callback) {

    var self = this;

    var type = this.type;
    var resource = this._getResource(type);

    return this._request('delete', resource, this.data[type].id, function(err, data, response) {

      if (!callback) {
        return;
      }

      if (err) {
        callback(err, response);
        return;
      }

      self = null;

      callback(null, response);

    });

  }


  create(type, properties) {

    var instance;

    // Figure out which class to use for this type

    switch (type) {
      case 'phonebookentry':
        instance = new Phonebookentry(this.options, this, properties);
        break;
    }

    return instance;

  }


  update(properties) {

    var type = this.type;

    this.data[type] = extend(this.data[type], properties);

    return this;

  }

}


class Phonebookentry extends Customer {

  constructor(options, customer, item) {

    super(options, customer.data.customer);

    this.data = this.data || {};
    this.data.phonebookentry = this.data.phonebookentry || {};

    this.type = 'phonebookentry';
    this.data.phonebookentry.type = 'phonebookentry';
    this.data.phonebookentry.id = item.id;
    this.data.phonebookentry.uri = item.uri;
    this.data.phonebookentry.parent = item.parent;
    this.data.phonebookentry.created = item.created;
    this.data.phonebookentry.name = item.name;
    this.data.phonebookentry.email = item.email;
    this.data.phonebookentry.phoneNumber = item.phoneNumber;

  }

}


module.exports = Nimvelo;
