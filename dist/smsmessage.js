'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Smsmessage = (function (_Representation) {
  _inherits(Smsmessage, _Representation);

  function Smsmessage(client, properties, parent) {
    _classCallCheck(this, Smsmessage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Smsmessage).call(this, client, properties, parent));

    _this.type = 'smsmessage';

    _this._unavailableMethods = ['save', 'delete'];
    _this._unavailableMethods.forEach(function (method) {
      return delete _this[method];
    });

    return _this;
  }

  return Smsmessage;
})(Representation);

module.exports = Smsmessage;