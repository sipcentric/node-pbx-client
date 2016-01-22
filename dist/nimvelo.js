'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = require('request');
var extend = require('deep-extend');

var Call = require('./call');
var Customer = require('./customer');
var CustomerList = require('./customerList');
var Music = require('./music');
var Outgoingcallerid = require('./outgoingcallerid');
var Phonebookentry = require('./phonebookentry');
var Phonenumber = require('./phonenumber');
var Prompt = require('./prompt');
var Stream = require('./stream');
var Recording = require('./recording');
var Smsmessage = require('./smsmessage');

// Promise + callback polyfill
Promise.prototype.nodeify = require('./polyfills/nodeify'); // eslint-disable-line no-extend-native

// Package version
var VERSION = require('../package.json').version;

var Nimvelo = (function () {
  function Nimvelo(options) {
    _classCallCheck(this, Nimvelo);

    this.VERSION = VERSION;

    if (typeof options !== 'undefined') {

      if (options.hasOwnProperty('username') && options.hasOwnProperty('password')) {

        // If we've got the credentials then encode and format them
        var encodedAuth = new Buffer(options.username + ':' + options.password).toString('base64');

        this.authorization = 'Basic ' + encodedAuth;
      }
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
          'Authorization': this.authorization,
          'Content-Type': 'application/json',
          'User-Agent': 'node-nimvelo/' + VERSION,
          'X-Relationship-Key': 'id'
        }
      }
    }, options);

    // Build a request object
    this.request = request.defaults(extend(
    // Pass the client submitted request options
    this.options.requestOptions));

    this.customers = new CustomerList(this);
    this.stream = new Stream(this);
  }

  _createClass(Nimvelo, [{
    key: '_pathForType',
    value: function _pathForType(type, id) {

      var path = '';
      var normalizedType = type.toLowerCase();

      switch (normalizedType) {
        case 'customers':
          // Use the default base REST URL
          break;
        case 'customer':
          path = id || '';
          break;
        case 'phonebookentry':
          path = id + '/phonebook';
          break;
        case 'smsmessage':
          path = id + '/sms';
          break;
        case 'sound':
        case 'prompt':
        case 'music':
          path = id + '/sounds';
          break;
        case 'callbundle':
        case 'call':
        case 'creditstatus':
        case 'endpoint':
        case 'outgoingcallerid':
        case 'phonenumber':
        case 'recording':
        case 'timeinterval':
          path = id + '/' + normalizedType + 's';
          break;
        default:
          path = id + '/' + normalizedType + 's';
          break;
      }

      return path;
    }
  }, {
    key: '_paramsForType',
    value: function _paramsForType(type) {

      var params = {};
      var normalizedType = type.toLowerCase();

      switch (normalizedType) {
        case 'prompt':
        case 'music':
          params.type = type;
          break;
        default:
          break;
      }

      return params;
    }
  }, {
    key: '_objectFromItem',
    value: function _objectFromItem(item, parent) {

      if (typeof item === 'undefined' || !item.hasOwnProperty('type')) {
        return item;
      }

      var object = undefined;

      // Figure out which class to use for this type

      switch (item.type) {
        /* eslint no-use-before-define: 0 */
        case 'call':
          object = new Call(this, item, parent);
          break;
        case 'customer':
          object = new Customer(this, item);
          break;
        case 'did':
          object = new Phonenumber(this, item, parent);
          break;
        case 'music':
          object = new Music(this, item, parent);
          break;
        case 'outgoingcallerid':
          object = new Outgoingcallerid(this, item, parent);
          break;
        case 'phonebookentry':
          object = new Phonebookentry(this, item, parent);
          break;
        case 'prompt':
          object = new Prompt(this, item, parent);
          break;
        case 'recording':
          object = new Recording(this, item, parent);
          break;
        case 'smsmessage':
          object = new Smsmessage(this, item, parent);
          break;
        default:
          break;
      }

      return object;
    }
  }, {
    key: '_buildObjects',
    value: function _buildObjects(items, parent) {
      var _this = this;

      // Builds an array of class objects from a given array of items,
      // or returns a single class object if we only give it one object

      return Array.isArray(items) ? items.map(function (item) {
        return _this._objectFromItem(item, parent);
      }) : this._objectFromItem(items, parent);
    }
  }, {
    key: '_setCustomerIdOnObjects',
    value: function _setCustomerIdOnObjects(objects, customerId) {

      if (!customerId) {
        return objects;
      }

      if (Array.isArray(objects)) {

        objects.map(function (obj) {
          obj.customerId = customerId;
        });
      } else {

        objects.customerId = customerId;
      }

      return objects;
    }
  }, {
    key: '_request',
    value: function _request(method, url, json, callback) {
      var _this2 = this;

      /* eslint no-param-reassign:0 */

      // Normalize method
      method = method.toLowerCase();

      if (typeof json === 'function') {
        callback = json;
        json = null;
      }

      var options = {
        method: method,
        url: url,
        json: json
      };

      return new Promise(function (resolve, reject) {

        // Make the request

        _this2.request(options, function makeRequest(error, response, data) {

          if (error) {

            // If there's an error, reject
            reject(error);
          } else {

            var parsedData = undefined;

            if (data && typeof data === 'string') {

              try {

                // If we've got data, and it's a string, try to parse it as JSON
                parsedData = JSON.parse(data);
              } catch (parseError) {

                // If we can't parse it, reject

                reject(new Error('Error parsing JSON. Status Code: ' + response.statusCode));

                return;
              }
            } else {

              parsedData = data;
            }

            if (parsedData && typeof parsedData.errors !== 'undefined') {

              // If there are some errors returned, reject

              reject(parsedData.errors);
            } else if (response.statusCode < 200 || response.statusCode >= 300) {

              // If we don't get the correct status back for the method, reject

              reject(new Error('Status Code: ' + response.statusCode));
            } else {

              // If we've got this far, then there are no errors and we can resolve

              resolve(parsedData);
            }
          }
        });
      }).nodeify(callback);
    }
  }, {
    key: '_buildUrl',
    value: function _buildUrl(type, object) {

      var url = undefined;
      var id = undefined;
      var params = undefined;

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
          default:
            break;
        }
      });

      // if (type !== 'customer') {
      //
      //   console.log('');
      //   console.log('type: ', type);
      //   console.log('object: ', object);
      //   console.log('params: ', params);
      //   console.log('id: ', id);
      //   console.log('');
      //
      // }

      extend(params, this._paramsForType(type));

      url = this._buildUrlSection(type, object);

      url += typeof id !== 'undefined' ? id + '/' : '';
      url += typeof params !== 'undefined' ? this._paramsToQueryString(params) + '/' : '';

      return url;
    }
  }, {
    key: '_paramsToQueryString',
    value: function _paramsToQueryString(params) {

      if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {

        var string = Object.keys(params).reduce(function (prev, key, index) {

          var startChar = '&';

          if (index === 0) {
            startChar = '?';
          }

          return '' + prev + startChar + key + '=' + params[key];
        }, '');

        return string;
      } else if (typeof params === 'string') {

        return params;
      } else {

        return '';
      }
    }
  }, {
    key: '_buildUrlSection',
    value: function _buildUrlSection(type, object) {
      var url = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

      /* eslint no-param-reassign:0 */

      var path = undefined;
      var baseUrl = this.options.restBase;

      if (object.parent) {

        path = this._pathForType(type, object.parent.id);

        url = (path ? path + '/' : '') + url;
        url = this._buildUrlSection(object.parent.type, object.parent, url);
      } else {

        path = this._pathForType(type);

        url = baseUrl + (path ? path + '/' : '') + (url ? url : '');
      }

      return url;
    }
  }, {
    key: '_getResource',
    value: function _getResource(type, object) {
      var _this3 = this;

      var id = undefined;
      var params = undefined;
      var callback = undefined;

      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
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
          default:
            break;
        }
      });

      var url = this._buildUrl(type, object, id, params);

      return new Promise(function (resolve, reject) {

        _this3._request('get', url).then(function (data) {

          if (data.hasOwnProperty('items')) {

            var items = _this3._buildObjects(data.items, object.parent);

            delete data.items;

            var meta = data;

            resolve({ meta: meta, items: items });
          } else {

            resolve(_this3._buildObjects(data, object.parent));
          }
        }, function (error) {

          reject(error);
        });
      }).nodeify(callback);
    }
  }]);

  return Nimvelo;
})();

module.exports = Nimvelo;