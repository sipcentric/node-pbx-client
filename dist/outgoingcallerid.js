'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = require('deep-extend');

var Representation = require('./representation');

var Outgoingcallerid = (function (_Representation) {
  _inherits(Outgoingcallerid, _Representation);

  function Outgoingcallerid(client, item, customerId) {
    _classCallCheck(this, Outgoingcallerid);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Outgoingcallerid).call(this, client, customerId));

    extend(_this, item);

    _this.type = 'outgoingcallerid';

    _this.unavailableMethods = ['save', 'delete'];
    _this.unavailableMethods.forEach(function (method) {
      return _this[method] = undefined;
    });

    return _this;
  }

  return Outgoingcallerid;
})(Representation);

module.exports = Outgoingcallerid;