'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RepresentationList = (function () {
  function RepresentationList(client) {
    _classCallCheck(this, RepresentationList);

    this.client = client;
  }

  _createClass(RepresentationList, [{
    key: 'list',
    value: function list(callback) {
      this.client._getResource(this.itemType, callback);
    }
  }, {
    key: 'find',
    value: function find(id, callback) {
      this.client._getResource(this.itemType, id, callback);
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

      return this.client._objectFromItem(properties);
    }
  }]);

  return RepresentationList;
})();

module.exports = RepresentationList;