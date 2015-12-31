'use strict';

// Module dependencies

const request = require('request');
const extend = require('deep-extend');
const atmosphere = require('atmosphere.js');

// Package version
const VERSION = require('../package.json').version;

class Nimvelo {

  constructor(options) {

    this.VERSION = VERSION;

    if (options.username && options.password) {

      // If we've got the credentials then encode and format them
      const encodedAuth = new Buffer(options.username + ':' + options.password).toString('base64');

      this.authorization = 'Basic ' + encodedAuth;

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
          'Authorization': this.authorization
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

    const bases = {
      rest: this.options.restBase,
      stream: this.options.streamBase
    };

    // If we've been given a valid base, use it, else default to rest
    const baseUrl = (bases.hasOwnProperty(base)) ? bases[base] : bases.rest;
    let path = this._pathForType(type);

    if (type === 'customer' && !id) {
      if (!id) {
        // If there's no ID provided for a customer, use the default
        path = this.options.customer;
      }
    }

    // Let's build our URL
    let url = baseUrl;

    url += path ? (path + '/') : '';
    url += id ? (id + '/') : '';

    return url;

  }


  _pathForType(type) {

    let path;
    const normalizedType = type.toLowerCase();

    switch (normalizedType) {
      case 'customers':
      case 'customer':
        // Use the default base REST URL
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
        path = this.options.customer + '/' + normalizedType;
        break;
      default:
        path = this.options.customer + '/' + normalizedType;
        break;
    }

    return path;

  }


  _request(method, resource, ...args) {

    let id;
    let params;
    let callback;

    const base = 'rest';
    let options;

    const normalizedMethod = method.toLowerCase();

    // Iterate through the given arguments assigning them accordingly
    // The ID is a string or a number
    // The object is the params
    // The function is the callback

    args.forEach(arg => {

      switch (typeof arg) {
        case 'string':
        case 'number':
          id = arg;
          break;
        case 'object':
          params = arg;
          break;
        case 'function':
          callback = arg;
          break;
        default:
          break;
      }

    });

    // Build the options to pass to our custom request object

    if (normalizedMethod === 'get') {

      options = {
        method: 'get',
        url: this._buildUrl(base, resource, id), // Generate url
        qs: params
      };

    } else if (normalizedMethod === 'put') {

      // If we're PUTting, the params become the body

      options = {
        method: 'put',
        url: this._buildUrl(base, resource, id), // Generate url
        json: params
      };

    } else if (normalizedMethod === 'post') {

      // If we're POSTting, the params become the body

      options = {
        method: 'post',
        url: this._buildUrl(base, resource), // Generate url
        json: params
      };

    } else if (normalizedMethod === 'delete') {

      options = {
        method: 'delete',
        url: this._buildUrl(base, resource, id) // Generate url
      };

    }

    // Make the request

    this.request(options, function makeRequest(error, response, data) {

      if (error) {

        // If there's an error, return our callback
        callback(error, data, response);

      } else {

        let parsedData;

        if (data && typeof data === 'string') {

          try {

            // If we've got data, and it's a string, try to parse it as JSON
            parsedData = JSON.parse(data);

          } catch (parseError) {

            // If we can't parse it, return our callback

            callback(
              new Error('Error parsing JSON. Status Code: ' + response.statusCode),
              data,
              response
            );
          }

        } else {

          parsedData = data;

        }

        if (typeof parsedData.errors !== 'undefined') {

          // If there are some errors returned, return them with our callback

          callback(parsedData.errors, parsedData, response);

        } else if (response.statusCode < 200 || response.statusCode >= 300) {

          // If we don't get the correct status back for the method

          callback(
            new Error('Status Code: ' + response.statusCode),
            parsedData,
            response
          );

        } else {

          // If we've got this far, then there are no errors

          callback(null, parsedData, response);

        }

      }

    });

  }


  _objectFromItem(item) {

    let object;

    // Figure out which class to use for this type

    switch (item.type) {
      /* eslint no-use-before-define: 0 */
      case 'customer':
        object = new Customer(this.options, item);
        break;
      case 'phonebookentry':
        object = new Phonebookentry(this.options, this, item);
        break;
      case 'recording':
        object = new Recording(this.options, this, item);
        break;
      default:
        break;
    }

    return object;

  }


  _buildObjects(items) {

    // Builds an array of class objects from a given array of items,
    // or returns a single class object if we only give it one object

    return Array.isArray(items) ? items.map(item => this._objectFromItem(item)) : this._objectFromItem(items);

  }


  customers(id, callback) {

    if (typeof id === 'function') {

      // If we've not got an id then set it to null

      /* eslint no-param-reassign: 0 */

      callback = id;
      id = null;

    }

    return this._request('get', 'customers', id, (err, data, response) => {

      if (!callback) {
        return;
      }

      if (err) {
        callback(err, data, response);
        return;
      }

      callback(null, this._buildObjects(data.items || data), response);

    });

  }


  customer(callback) {

    // Alias this.customers but passes 'me' as id
    this.customers('me', callback);

  }

  stream() {

    return new Stream(this.options);

  }

}


class Stream extends Nimvelo {

  constructor(options) {

    super(options);

    this.stream = {
      url: this.options.streamBase,
      contentType: 'application/json',
      logLevel: 'debug',
      headers: {
        'Authorization': this.authorization
      },
      dropHeaders: false,
      attachHeadersAsQueryString: false,
      maxReconnectOnClose: 0,
      enableXDR: true,
      transport: 'streaming'
    };


    this.stream.onOpen = function streamOpen() {

      console.log('Connected to stream');

    };


    this.stream.onError = function streamError(error) {

      console.log('Stream error: ' + error.reasonPhrase);

    };

  }


  subscribe(type, callback) {

    this.stream.onMessage = function streamMessage(data) {

      let message;

      try {
        message = JSON.parse(data.responseBody);
      } catch (err) {

        // Ignore SyntaxErrors
        if ((err + '').substr(0, 11) !== 'SyntaxError') {
          console.log('Error parsing JSON: ' + err);
        }

        return;

      }

      if (message.event === type) {
        callback(message);
      }

    };

    atmosphere.subscribe(this.stream);

  }


}


class Customer extends Nimvelo {

  constructor(options, item) {

    super(options);

    this.data = this.data || {};
    this.data.customer = this.data.customer || {};

    this.type = 'customer';
    this.data.customer.type = 'customer';

    extend(this.data.customer, item);

  }


  _resourceForType(type) {

    let resource;

    switch (type) {
      case 'customer':
        resource = 'customer';
        break;
      case 'phonebookentry':
        resource = 'phonebook';
        break;
      case 'recording':
        // Basic pluralization
        resource += 's';
        break;
      default:
        break;
    }

    return resource;

  }


  _getResource(type, id, callback) {

    if (typeof id === 'function') {

      // If we've not got an id then set it to null

      callback = id;
      id = null;

    }

    return this._request('get', type, id, (err, data, response) => {

      if (!callback) {
        return;
      }

      if (err) {
        callback(err, data, response);
        return;
      }

      callback(null, this._buildObjects(data.items || data), response);

    });

  }


  phonebook(id, callback) {

    this._getResource('phonebook', id, callback);

  }


  recordings(id, callback) {

    this._getResource('recordings', id, callback);

  }


  save(callback) {

    const type = this.type;
    const resource = this._resourceForType(type);

    const requestCallback = (err, data, response) => {

      if (!callback) {
        return;
      }

      if (err) {
        callback(err, data, response);
        return;
      }

      // Update our object with the newly returned propreties
      extend(this.data[type], data.items ? data.items : data);

      // Pass our newly updated object to the callback
      callback(null, this, response);

    };

    let builtRequest;

    if (this.data[type].id) {

      builtRequest = this._request('put', resource, this.data[type].id, this.data[type], requestCallback);

    } else {

      builtRequest = this._request('post', resource, this.data[type], requestCallback);

    }

    return builtRequest;

  }


  delete(callback) {

    const type = this.type;
    const resource = this._resourceForType(type);

    return this._request('delete', resource, this.data[type].id, function handleDeleteResponse(err, data, response) {

      if (!callback) {
        return;
      }

      if (err) {
        callback(err, response);
        return;
      }

      callback(null, response);

    });

  }


  create(type, properties) {

    let instance;

    // Figure out which class to use for this type

    switch (type) {
      case 'phonebookentry':
        instance = new Phonebookentry(this.options, this, properties);
        break;
      default:
        break;
    }

    return instance;

  }


  update(properties) {

    const type = this.type;

    extend(this.data[type], properties);

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

    extend(this.data.phonebookentry, item);

  }

}


class Recording extends Customer {

  constructor(options, customer, item) {

    super(options, customer.data.customer);

    this.data = this.data || {};
    this.data.recording = this.data.recording || {};

    this.type = 'recording';
    this.data.recording.type = 'recording';

    extend(this.data.recording, item);

  }

}


module.exports = Nimvelo;
