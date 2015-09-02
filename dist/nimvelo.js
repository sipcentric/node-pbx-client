'use strict';

// Module dependencies

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var request = require('request');
var extend = require('deep-extend');
var atmosphere = require('atmosphere.js');

// Package version
var VERSION = require('../package.json').version;

var Nimvelo = (function () {
  function Nimvelo(options) {
    _classCallCheck(this, Nimvelo);

    this.VERSION = VERSION;

    if (options.username && options.password) {

      // If we've got the credentials then encode and format them
      var encodedAuth = new Buffer(options.username + ':' + options.password).toString('base64');

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
    this.request = request.defaults(extend(
    // Pass the client submitted request options
    this.options.requestOptions));
  }

  _createClass(Nimvelo, [{
    key: '_buildUrl',
    value: function _buildUrl(base, type, id) {

      // Build the url based on the base and the type

      var bases = {
        'rest': this.options.restBase,
        'stream': this.options.streamBase
      };

      var baseUrl = bases.hasOwnProperty(base) ? bases[base] : bases.rest;
      var path;

      path = this._pathForType(type);

      if (type === 'customer' && !id) {
        if (!id) {
          // If there's no ID provided for a customer, use the default
          path = this.options.customer;
        }
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
  }, {
    key: '_pathForType',
    value: function _pathForType(type) {

      var path;
      type = type.toLowerCase();

      switch (type) {
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
          path = this.options.customer + '/' + type;
          break;
        default:
          path = this.options.customer + '/' + type;
          break;
      }

      return path;
    }
  }, {
    key: '_request',
    value: function _request(method, resource, id, params, callback) {

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

      this.request(options, function (error, response, data) {

        if (error) {

          // If there's an error, return our callback
          callback(error, data, response);
        } else {

          try {
            // Try to parse the returned data

            if (data && typeof data === 'string') {
              data = JSON.parse(data);
            }
          } catch (parseError) {
            // If we can't parse it, return our callback

            callback(new Error('Error parsing JSON. Status Code: ' + response.statusCode), data, response);
          }

          if (typeof data.errors !== 'undefined') {

            // If there's some errors returned

            callback(data.errors, data, response);
          } else if (method === 'get' && response.statusCode !== 200 || method === 'put' && response.statusCode !== 200 || method === 'post' && response.statusCode !== 201 || method === 'delete' && response.statusCode !== 204) {

            // If we don't get the correct status back for the method

            callback(new Error('Status Code: ' + response.statusCode), data, response);
          } else {

            // If we've got this far, then theres no errors

            callback(null, data, response);
          }
        }
      });
    }
  }, {
    key: '_objectFromItem',
    value: function _objectFromItem(item) {

      var object;

      // Figure out which class to use for this type

      switch (item.type) {
        case 'customer':
          object = new Customer(this.options, item);
          break;
        case 'phonebookentry':
          object = new Phonebookentry(this.options, this, item);
          break;
        case 'recording':
          object = new Recording(this.options, this, item);
          break;
      }

      return object;
    }
  }, {
    key: '_buildObjects',
    value: function _buildObjects(items) {

      var classArray = [];
      var self = this;

      if (Array.isArray(items)) {

        // We've got an array of objects

        items.forEach(function (item) {

          classArray.push(self._objectFromItem(item));
        });

        return classArray;
      } else {

        // We just have a single object

        return self._objectFromItem(items);
      }
    }
  }, {
    key: 'customers',
    value: function customers(id, callback) {

      var self = this;

      if (typeof id === 'function') {

        // If we've not got an id then set it to 'me'

        callback = id;
        id = null;
      }

      return this._request('get', 'customers', id, function (err, data, response) {

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
  }, {
    key: 'customer',
    value: function customer(callback) {

      // Alias this.customers but passes 'me' as id
      this.customers('me', callback);
    }
  }, {
    key: 'stream',
    value: function stream() {

      return new Stream(this.options);
    }
  }]);

  return Nimvelo;
})();

var Stream = (function (_Nimvelo) {
  _inherits(Stream, _Nimvelo);

  function Stream(options) {
    _classCallCheck(this, Stream);

    _get(Object.getPrototypeOf(Stream.prototype), 'constructor', this).call(this, options);

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

    this.stream.onOpen = function () {

      console.log('Connected to stream');
    };

    this.stream.onError = function (error) {

      console.log('Stream error: ' + error.reasonPhrase);
    };
  }

  _createClass(Stream, [{
    key: 'subscribe',
    value: function subscribe(type, callback) {

      this.stream.onMessage = function (data) {

        var message;

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
  }]);

  return Stream;
})(Nimvelo);

var Customer = (function (_Nimvelo2) {
  _inherits(Customer, _Nimvelo2);

  function Customer(options, item) {
    _classCallCheck(this, Customer);

    _get(Object.getPrototypeOf(Customer.prototype), 'constructor', this).call(this, options);

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

  _createClass(Customer, [{
    key: '_resourceForType',
    value: function _resourceForType(type) {

      var resource;

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
      }

      return resource;
    }
  }, {
    key: '_getResource',
    value: function _getResource(type, id, callback) {

      var self = this;

      if (typeof id === 'function') {

        // If we've not got an id then set it to null

        callback = id;
        id = null;
      }

      return this._request('get', type, id, function (err, data, response) {

        if (!callback) {
          return;
        }

        if (err) {
          callback(err, data, response);
          return;
        }

        callback(null, self._buildObjects(data.items ? data.items : data), response);
      });
    }
  }, {
    key: 'phonebook',
    value: function phonebook(id, callback) {

      this._getResource('phonebook', id, callback);
    }
  }, {
    key: 'recordings',
    value: function recordings(id, callback) {

      this._getResource('recordings', id, callback);
    }
  }, {
    key: 'save',
    value: function save(callback) {

      var self = this;

      var type = this.type;
      var resource = this._resourceForType(type);

      var requestCallback = function requestCallback(err, data, response) {

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
  }, {
    key: 'delete',
    value: function _delete(callback) {

      var type = this.type;
      var resource = this._resourceForType(type);

      return this._request('delete', resource, this.data[type].id, function (err, data, response) {

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
  }, {
    key: 'create',
    value: function create(type, properties) {

      var instance;

      // Figure out which class to use for this type

      switch (type) {
        case 'phonebookentry':
          instance = new Phonebookentry(this.options, this, properties);
          break;
      }

      return instance;
    }
  }, {
    key: 'update',
    value: function update(properties) {

      var type = this.type;

      this.data[type] = extend(this.data[type], properties);

      return this;
    }
  }]);

  return Customer;
})(Nimvelo);

var Phonebookentry = (function (_Customer) {
  _inherits(Phonebookentry, _Customer);

  function Phonebookentry(options, customer, item) {
    _classCallCheck(this, Phonebookentry);

    _get(Object.getPrototypeOf(Phonebookentry.prototype), 'constructor', this).call(this, options, customer.data.customer);

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

  return Phonebookentry;
})(Customer);

var Recording = (function (_Customer2) {
  _inherits(Recording, _Customer2);

  function Recording(options, customer, item) {
    _classCallCheck(this, Recording);

    _get(Object.getPrototypeOf(Recording.prototype), 'constructor', this).call(this, options, customer.data.customer);

    this.data = this.data || {};
    this.data.recording = this.data.recording || {};

    this.type = 'recording';
    this.data.recording.type = 'recording';
    this.data.recording.id = item.id;
    this.data.recording.uri = item.uri;
    this.data.recording.parent = item.parent;
    this.data.recording.created = item.created;
    this.data.recording.direction = item.direction;
    this.data.recording.partyId = item.partyId;
    this.data.recording.started = item.started;
    this.data.recording.size = item.size;
    this.data.recording.callId = item.callId;
    this.data.recording.linkedId = item.linkedId;
    this.data.recording.endpoint = item.endpoint;
  }

  return Recording;
})(Customer);

module.exports = Nimvelo;