'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');
var EstimateList = require('./estimateList');
var InvoiceList = require('./invoiceList');
var PaymentmethodList = require('./paymentmethodList');

var Billingaccount = (function (_Representation) {
  _inherits(Billingaccount, _Representation);

  function Billingaccount(client, properties, parent) {
    _classCallCheck(this, Billingaccount);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Billingaccount).call(this, client, properties, parent));

    _this.type = 'billingaccount';

    _this.invoices = new InvoiceList(_this.client, _this);
    _this.estimate = new EstimateList(_this.client, _this);
    _this.paymentmethods = new PaymentmethodList(_this.client, _this);

    return _this;
  }

  return Billingaccount;
})(Representation);

module.exports = Billingaccount;