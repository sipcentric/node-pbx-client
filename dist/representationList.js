'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RepresentationList = (function () {
  function RepresentationList(client, customerId) {
    _classCallCheck(this, RepresentationList);

    this.client = client;
    this.customerId = customerId;
  }

  _createClass(RepresentationList, [{
    key: 'list',
    value: function list(params, callback) {
      return this.client._getResource(this.itemType, this.customerId, params, callback);
    }
  }, {
    key: 'find',
    value: function find(id, params, callback) {
      return this.client._getResource(this.itemType, this.customerId, id, params, callback);
    }
  }, {
    key: 'create',
    value: function create(properties) {

      if ((typeof properties === 'undefined' ? 'undefined' : _typeof(properties)) !== 'object') {
        /* eslint no-param-reassign:0 */
        properties = {};
      }

      // Make sure the type is correct, and it has no ID
      properties.id = undefined;
      properties.type = this.itemType;

      var object = this.client._objectFromItem(properties);

      return this.client._setCustomerIdOnObjects(object, this.customerId);
    }
  }]);

  return RepresentationList;
})();

module.exports = RepresentationList;