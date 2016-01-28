'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RepresentationList = (function () {
  function RepresentationList(client, parent) {
    _classCallCheck(this, RepresentationList);

    this.client = client;
    this.parent = parent;
  }

  _createClass(RepresentationList, [{
    key: 'get',
    value: function get(id, params, callback) {
      return this.client._getResource(this.itemType, this, id, params, callback);
    }
  }, {
    key: 'create',
    value: function create() {
      var properties = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      // Make sure the type is correct, and it has no ID
      properties.id = undefined;
      properties.type = this.itemType;

      return this.client._objectFromItem(properties, this.parent);
    }
  }]);

  return RepresentationList;
})();

module.exports = RepresentationList;