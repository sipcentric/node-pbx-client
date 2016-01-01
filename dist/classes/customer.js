'use strict'

// Module dependencies
;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = require('deep-extend');

// Class dependencies
var Nimvelo = require('./nimvelo');
var Phonebookentry = require('./phonebookentry');
var Recording = require('./recording');

var Customer = (function (_Nimvelo) {
  _inherits(Customer, _Nimvelo);

  function Customer(options, item) {
    _classCallCheck(this, Customer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Customer).call(this, options));

    _this.data = _this.data || {};
    _this.data.customer = _this.data.customer || {};

    _this.type = 'customer';
    _this.data.customer.type = 'customer';

    extend(_this.data.customer, item);

    return _this;
  }

  _createClass(Customer, [{
    key: '_resourceForType',
    value: function _resourceForType(type) {

      var resource = undefined;

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
  }, {
    key: '_getResource',
    value: function _getResource(type, id, callback) {
      var _this2 = this;

      if (typeof id === 'function') {
        /* eslint no-param-reassign:0 */

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

        callback(null, _this2._buildObjects(data.items || data), response);
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
      var _this3 = this;

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
        extend(_this3.data[type], data.items ? data.items : data);

        // Pass our newly updated object to the callback
        callback(null, _this3, response);
      };

      var builtRequest = undefined;

      if (this.data[type].id) {

        builtRequest = this._request('put', resource, this.data[type].id, this.data[type], requestCallback);
      } else {

        builtRequest = this._request('post', resource, this.data[type], requestCallback);
      }

      return builtRequest;
    }
  }, {
    key: 'delete',
    value: function _delete(callback) {

      var type = this.type;
      var resource = this._resourceForType(type);

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
  }, {
    key: 'create',
    value: function create(type, properties) {

      var instance = undefined;

      // Figure out which class to use for this type

      switch (type) {
        case 'phonebookentry':
          instance = new Phonebookentry(this.options, this, properties);
          break;
        case 'recording':
          instance = new Recording(this.options, this, properties);
          break;
        default:
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

module.exports = Customer;