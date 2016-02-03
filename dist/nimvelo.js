'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

// Promise + callback polyfill

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request2 = require('request');

var _request3 = _interopRequireDefault(_request2);

var _deepExtend = require('deep-extend');

var _deepExtend2 = _interopRequireDefault(_deepExtend);

var _availablebundle = require('./availablebundle');

var _availablebundle2 = _interopRequireDefault(_availablebundle);

var _billingaccount = require('./billingaccount');

var _billingaccount2 = _interopRequireDefault(_billingaccount);

var _call = require('./call');

var _call2 = _interopRequireDefault(_call);

var _callbundle = require('./callbundle');

var _callbundle2 = _interopRequireDefault(_callbundle);

var _creditstatus = require('./creditstatus');

var _creditstatus2 = _interopRequireDefault(_creditstatus);

var _customer = require('./customer');

var _customer2 = _interopRequireDefault(_customer);

var _customerList = require('./customerList');

var _customerList2 = _interopRequireDefault(_customerList);

var _forwardingrule = require('./forwardingrule');

var _forwardingrule2 = _interopRequireDefault(_forwardingrule);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

var _invoice = require('./invoice');

var _invoice2 = _interopRequireDefault(_invoice);

var _ivr = require('./ivr');

var _ivr2 = _interopRequireDefault(_ivr);

var _mailbox = require('./mailbox');

var _mailbox2 = _interopRequireDefault(_mailbox);

var _music = require('./music');

var _music2 = _interopRequireDefault(_music);

var _outgoingcallerid = require('./outgoingcallerid');

var _outgoingcallerid2 = _interopRequireDefault(_outgoingcallerid);

var _paymentmethod = require('./paymentmethod');

var _paymentmethod2 = _interopRequireDefault(_paymentmethod);

var _phone = require('./phone');

var _phone2 = _interopRequireDefault(_phone);

var _phonebookentry = require('./phonebookentry');

var _phonebookentry2 = _interopRequireDefault(_phonebookentry);

var _phonenumber = require('./phonenumber');

var _phonenumber2 = _interopRequireDefault(_phonenumber);

var _preference = require('./preference');

var _preference2 = _interopRequireDefault(_preference);

var _prompt = require('./prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _queue = require('./queue');

var _queue2 = _interopRequireDefault(_queue);

var _queueentries = require('./queueentries');

var _queueentries2 = _interopRequireDefault(_queueentries);

var _queuestatus = require('./queuestatus');

var _queuestatus2 = _interopRequireDefault(_queuestatus);

var _stream = require('./stream');

var _stream2 = _interopRequireDefault(_stream);

var _recording = require('./recording');

var _recording2 = _interopRequireDefault(_recording);

var _routingrule = require('./routingrule');

var _routingrule2 = _interopRequireDefault(_routingrule);

var _sipidentity = require('./sipidentity');

var _sipidentity2 = _interopRequireDefault(_sipidentity);

var _sipregistration = require('./sipregistration');

var _sipregistration2 = _interopRequireDefault(_sipregistration);

var _smsmessage = require('./smsmessage');

var _smsmessage2 = _interopRequireDefault(_smsmessage);

var _timeinterval = require('./timeinterval');

var _timeinterval2 = _interopRequireDefault(_timeinterval);

var _virtual = require('./virtual');

var _virtual2 = _interopRequireDefault(_virtual);

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

var _representationList = require('./representationList');

var _representationList2 = _interopRequireDefault(_representationList);

var _nodeify = require('./polyfills/nodeify');

var _nodeify2 = _interopRequireDefault(_nodeify);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Promise.prototype.nodeify = _nodeify2.default; // eslint-disable-line no-extend-native

// Package version

var VERSION = _package2.default.version;

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
    this.options = (0, _deepExtend2.default)({
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
    this.request = _request3.default.defaults((0, _deepExtend2.default)(
    // Pass the client submitted request options
    this.options.requestOptions));

    this.customers = new _customerList2.default(this);
    this.stream = new _stream2.default(this);
  }

  _createClass(Nimvelo, [{
    key: '_pathForType',
    value: function _pathForType(type, id) {

      var path = '';
      var normalizedType = type.toLowerCase();

      switch (normalizedType) {
        case 'availablebundle':
          path = id + '/callbundles/available';
          break;
        case 'billingaccount':
          path = id + '/billing';
          break;
        case 'creditstatus':
          path = id + '/creditstatus';
          break;
        case 'customers':
          // Use the default base REST URL
          break;
        case 'customer':
          path = id || '';
          break;
        case 'estimate':
          path = 'estimate';
          break;
        case 'phone':
        case 'virtual':
        case 'group':
        case 'queue':
        case 'ivr':
        case 'mailbox':
          path = id + '/endpoints';
          break;
        case 'invoice':
          path = 'invoices';
          break;
        case 'phonebookentry':
          path = id + '/phonebook';
          break;
        case 'paymentmethod':
          path = 'paymentmethods';
          break;
        case 'queueentries':
          path = id + '/queueentries';
          break;
        case 'queuestatus':
          path = id + '/queuestatus';
          break;
        case 'sipidentity':
          path = id + '/sip';
          break;
        case 'sipregistration':
          path = 'registrations';
          break;
        case 'smsmessage':
          path = id + '/sms';
          break;
        case 'sound':
        case 'prompt':
        case 'music':
          path = id + '/sounds';
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
        case 'phone':
        case 'virtual':
        case 'group':
        case 'queue':
        case 'ivr':
        case 'mailbox':
          params.type = type;
          break;
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
        case 'availablebundle':
          object = new _availablebundle2.default(this, item, parent);
          break;
        case 'billingaccount':
          object = new _billingaccount2.default(this, item, parent);
          break;
        case 'call':
          object = new _call2.default(this, item, parent);
          break;
        case 'callbundle':
          object = new _callbundle2.default(this, item, parent);
          break;
        case 'creditstatus':
          object = new _creditstatus2.default(this, item, parent);
          break;
        case 'customer':
          object = new _customer2.default(this, item);
          break;
        case 'did':
          object = new _phonenumber2.default(this, item, parent);
          break;
        case 'forwardingrule':
          object = new _forwardingrule2.default(this, item, parent);
          break;
        case 'group':
          object = new _group2.default(this, item, parent);
          break;
        case 'invoice':
          object = new _invoice2.default(this, item, parent);
          break;
        case 'ivr':
          object = new _ivr2.default(this, item, parent);
          break;
        case 'mailbox':
          object = new _mailbox2.default(this, item, parent);
          break;
        case 'music':
          object = new _music2.default(this, item, parent);
          break;
        case 'outgoingcallerid':
          object = new _outgoingcallerid2.default(this, item, parent);
          break;
        case 'paymentmethod':
        case 'worldpay':
          object = new _paymentmethod2.default(this, item, parent);
          break;
        case 'phone':
          object = new _phone2.default(this, item, parent);
          break;
        case 'phonebookentry':
          object = new _phonebookentry2.default(this, item, parent);
          break;
        case 'prompt':
          object = new _prompt2.default(this, item, parent);
          break;
        case 'preference':
          object = new _preference2.default(this, item, parent);
          break;
        case 'queue':
          object = new _queue2.default(this, item, parent);
          break;
        case 'queueentries':
          object = new _queueentries2.default(this, item, parent);
          break;
        case 'queuestatus':
          object = new _queuestatus2.default(this, item, parent);
          break;
        case 'recording':
          object = new _recording2.default(this, item, parent);
          break;
        case 'routingrule':
          object = new _routingrule2.default(this, item, parent);
          break;
        case 'smsmessage':
          object = new _smsmessage2.default(this, item, parent);
          break;
        case 'sipidentity':
          object = new _sipidentity2.default(this, item, parent);
          break;
        case 'sipregistration':
          object = new _sipregistration2.default(this, item, parent);
          break;
        case 'timeinterval':
          object = new _timeinterval2.default(this, item, parent);
          break;
        case 'virtual':
          object = new _virtual2.default(this, item, parent);
          break;
        default:
          object = item;
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
    key: '_request',
    value: function _request(method, url, params, callback) {
      var _this2 = this;

      /* eslint no-param-reassign:0 */

      // Normalize method
      method = method.toLowerCase();

      if (typeof params === 'function') {
        callback = params;
        params = null;
      }

      var json = {};

      // Filter out properties which shouldn't be sent back to the server in
      // the json body. This won't affect query params
      for (var key in params) {

        if (params.hasOwnProperty(key)) {

          var property = params[key];
          if (key.charAt(0) !== '_' && key !== 'client' && key !== 'parent' && !(property instanceof _representation2.default) && !(property instanceof _representationList2.default)) {

            json[key] = property;
          }
        }
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
      var params = {};

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

      (0, _deepExtend2.default)(params, this._paramsForType(type));

      url = this._buildUrlSection(type, object);
      url += typeof id !== 'undefined' ? id + '/' : '';
      url += Object.keys(params).length > 0 ? this._paramsToQueryString(params) : '';

      return url;
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
    key: '_formatResponse',
    value: function _formatResponse(response, parent) {
      var _this3 = this;

      var items = this._buildObjects(response.items, parent);

      delete response.items;

      var meta = response;

      if (meta.hasOwnProperty('nextPage')) {
        (function () {
          var nextPageUrl = meta.nextPage;
          meta.nextPage = function () {
            return _this3._request('get', nextPageUrl);
          };
        })();
      }

      if (meta.hasOwnProperty('prevPage')) {
        (function () {
          var prevPageUrl = meta.prevPage;
          meta.prevPage = function () {
            return _this3._request('get', prevPageUrl);
          };
        })();
      }

      return { meta: meta, items: items };
    }
  }, {
    key: '_getResource',
    value: function _getResource(type, object) {
      var _this4 = this;

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

        _this4._request('get', url).then(function (data) {

          if (data.hasOwnProperty('items')) {

            var items = _this4._buildObjects(data.items, object.parent);

            delete data.items;

            var meta = data;

            if (meta.hasOwnProperty('nextPage')) {
              (function () {
                var nextPageUrl = meta.nextPage;
                meta.nextPage = function () {
                  return _this4._request('get', nextPageUrl);
                };
              })();
            }

            if (meta.hasOwnProperty('prevPage')) {
              (function () {
                var prevPageUrl = meta.prevPage;
                meta.prevPage = function () {
                  return _this4._request('get', prevPageUrl);
                };
              })();
            }

            resolve({ meta: meta, items: items });
          } else {

            resolve(_this4._buildObjects(data, object.parent));
          }
        }, function (error) {

          reject(error);
        });
      }).nodeify(callback);
    }
  }, {
    key: '_saveRepresentation',
    value: function _saveRepresentation(object, callback) {
      var _this5 = this;

      var url = this._buildUrl(object.type, object, object.id);
      var requestMethod = object.id ? 'put' : 'post';

      return new Promise(function (resolve, reject) {

        _this5._request(requestMethod, url, object).then(function (data) {

          // Update our object with the newly returned propreties
          (0, _deepExtend2.default)(object, data);

          resolve(data);
        }, reject);
      }).nodeify(callback);
    }
  }, {
    key: '_deleteRepresentation',
    value: function _deleteRepresentation(object, callback) {
      var _this6 = this;

      var url = this._buildUrl(object.type, object, object.id);

      return new Promise(function (resolve, reject) {

        _this6._request('delete', url, object).then(resolve, reject);
      }).nodeify(callback);
    }
  }]);

  return Nimvelo;
})();

exports.default = Nimvelo;