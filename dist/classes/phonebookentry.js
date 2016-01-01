'use strict'

// Module dependencies
;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = require('deep-extend');

// Class dependencies
var Customer = require('./customer');

var Phonebookentry = (function (_Customer) {
  _inherits(Phonebookentry, _Customer);

  function Phonebookentry(options, customer, item) {
    _classCallCheck(this, Phonebookentry);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Phonebookentry).call(this, options, customer.data.customer));

    _this.data = _this.data || {};
    _this.data.phonebookentry = _this.data.phonebookentry || {};

    _this.type = 'phonebookentry';
    _this.data.phonebookentry.type = 'phonebookentry';

    extend(_this.data.phonebookentry, item);

    return _this;
  }

  return Phonebookentry;
})(Customer);

module.exports = Phonebookentry;