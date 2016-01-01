'use strict'

// Module dependencies
;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = require('deep-extend');

// Class dependencies
var Customer = require('./customer');

var Recording = (function (_Customer) {
  _inherits(Recording, _Customer);

  function Recording(options, customer, item) {
    _classCallCheck(this, Recording);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Recording).call(this, options, customer.data.customer));

    _this.data = _this.data || {};
    _this.data.recording = _this.data.recording || {};

    _this.type = 'recording';
    _this.data.recording.type = 'recording';

    extend(_this.data.recording, item);

    return _this;
  }

  return Recording;
})(Customer);

module.exports = Recording;