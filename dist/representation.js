'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var extend = require('deep-extend');

var Representation = (function () {
  function Representation(client, properties, parent) {
    _classCallCheck(this, Representation);

    this.client = client;
    extend(this, properties);
    this.parent = parent;
  }

  _createClass(Representation, [{
    key: 'save',
    value: function save(callback) {
      return this.client._saveRepresentation(this, callback);
    }
  }, {
    key: 'delete',
    value: function _delete(callback) {
      return this.client._deleteRepresentation(this, callback);
    }
  }]);

  return Representation;
})();

module.exports = Representation;