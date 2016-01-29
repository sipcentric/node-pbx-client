'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');
var ForwardingruleList = require('./forwardingruleList');
var SipidentityList = require('./sipidentityList');

var Phone = (function (_Representation) {
  _inherits(Phone, _Representation);

  function Phone(client, properties, parent) {
    _classCallCheck(this, Phone);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Phone).call(this, client, properties, parent));

    _this.type = 'phone';

    _this.sip = new SipidentityList(_this.client, _this);
    _this.forwardingrules = new ForwardingruleList(_this.client, _this);

    return _this;
  }

  return Phone;
})(Representation);

module.exports = Phone;