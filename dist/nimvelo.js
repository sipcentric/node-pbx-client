'use strict'

// Module dependencies

;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        rest: this.options.restBase,
        stream: this.options.streamBase
      };

      // If we've been given a valid base, use it, else default to rest
      var baseUrl = bases.hasOwnProperty(base) ? bases[base] : bases.rest;
      var path;

      path = this._pathForType(type);

      if (type === 'customer' && !id) {
        if (!id) {
          // If there's no ID provided for a customer, use the default
          path = this.options.customer;
        }
      }

      // Let's build our URL
      var url = baseUrl;

      url += path ? path + '/' : '';
      url += id ? id + '/' : '';

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
    value: function _request(method, resource) {

      var id;
      var params;
      var callback;

      var base = 'rest';
      var options;
      var body;

      method = method.toLowerCase();

      // Iterate through the given arguments assigning them accordingly
      // The ID is a string or a number
      // The object is the params
      // The function is the callback

      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      args.forEach(function (arg) {

        switch (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) {
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
        }
      });

      // Build the options to pass to our custom request object

      if (method === 'get') {

        options = {
          method: 'get',
          url: this._buildUrl(base, resource, id), // Generate url
          qs: params
        };
      } else if (method === 'put') {

        // If we're PUTting, the params become the body

        body = params;

        options = {
          method: 'put',
          url: this._buildUrl(base, resource, id), // Generate url
          json: body
        };
      } else if (method === 'post') {

        // If we're POSTting, the params become the body

        body = params;

        options = {
          method: 'post',
          url: this._buildUrl(base, resource), // Generate url
          json: body
        };
      } else if (method === 'delete') {

        options = {
          method: 'delete',
          url: this._buildUrl(base, resource, id) // Generate url
        };
      }

      // Make the request

      this.request(options, function (error, response, data) {

        if (error) {

          // If there's an error, return our callback
          callback(error, data, response);
        } else {

          try {

            // If we've got data, and it's a string, try to parse it as JSON

            if (data && typeof data === 'string') {
              data = JSON.parse(data);
            }
          } catch (parseError) {

            // If we can't parse it, return our callback

            callback(new Error('Error parsing JSON. Status Code: ' + response.statusCode), data, response);
          }

          if (typeof data.errors !== 'undefined') {

            // If there are some errors returned, return them with our callback

            callback(data.errors, data, response);
          } else if (response.statusCode < 200 || response.statusCode >= 300) {

            // If we don't get the correct status back for the method

            callback(new Error('Status Code: ' + response.statusCode), data, response);
          } else {

            // If we've got this far, then there are no errors

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
      var _this = this;

      // Builds an array of class objects from a given array of items,
      // or returns a single class object if we only give it one object

      return Array.isArray(items) ? items.map(function (item) {
        return _this._objectFromItem(item);
      }) : this._objectFromItem(items);
    }
  }, {
    key: 'customers',
    value: function customers(id, callback) {
      var _this2 = this;

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

        callback(null, _this2._buildObjects(data.items || data), response);
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

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Stream).call(this, options));

    _this3.stream = {
      url: _this3.options.streamBase,
      contentType: 'application/json',
      logLevel: 'debug',
      headers: {
        'Authorization': _this3.authorization
      },
      dropHeaders: false,
      attachHeadersAsQueryString: false,
      maxReconnectOnClose: 0,
      enableXDR: true,
      transport: 'streaming'
    };

    _this3.stream.onOpen = function () {

      console.log('Connected to stream');
    };

    _this3.stream.onError = function (error) {

      console.log('Stream error: ' + error.reasonPhrase);
    };

    return _this3;
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

    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Customer).call(this, options));

    _this4.data = _this4.data || {};
    _this4.data.customer = _this4.data.customer || {};

    _this4.type = 'customer';
    _this4.data.customer.type = 'customer';

    extend(_this4.data.customer, item);

    return _this4;
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
      var _this5 = this;

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

        callback(null, _this5._buildObjects(data.items || data), response);
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
      var _this6 = this;

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
        extend(_this6.data[type], data.items ? data.items : data);

        // Pass our newly updated object to the callback
        callback(null, _this6, response);
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

      extend(this.data[type], properties);

      return this;
    }
  }]);

  return Customer;
})(Nimvelo);

var Phonebookentry = (function (_Customer) {
  _inherits(Phonebookentry, _Customer);

  function Phonebookentry(options, customer, item) {
    _classCallCheck(this, Phonebookentry);

    var _this7 = _possibleConstructorReturn(this, Object.getPrototypeOf(Phonebookentry).call(this, options, customer.data.customer));

    _this7.data = _this7.data || {};
    _this7.data.phonebookentry = _this7.data.phonebookentry || {};

    _this7.type = 'phonebookentry';
    _this7.data.phonebookentry.type = 'phonebookentry';

    extend(_this7.data.phonebookentry, item);

    return _this7;
  }

  return Phonebookentry;
})(Customer);

var Recording = (function (_Customer2) {
  _inherits(Recording, _Customer2);

  function Recording(options, customer, item) {
    _classCallCheck(this, Recording);

    var _this8 = _possibleConstructorReturn(this, Object.getPrototypeOf(Recording).call(this, options, customer.data.customer));

    _this8.data = _this8.data || {};
    _this8.data.recording = _this8.data.recording || {};

    _this8.type = 'recording';
    _this8.data.recording.type = 'recording';

    extend(_this8.data.recording, item);

    return _this8;
  }

  return Recording;
})(Customer);

module.exports = Nimvelo;