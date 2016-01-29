'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var BillingaccountList = (function (_RepresentationList) {
  _inherits(BillingaccountList, _RepresentationList);

  function BillingaccountList(client, parent) {
    _classCallCheck(this, BillingaccountList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BillingaccountList).call(this, client, parent));

    _this.type = 'billingaccountList';
    _this.itemType = 'billingaccount';
    return _this;
  }

  return BillingaccountList;
})(RepresentationList);

module.exports = BillingaccountList;