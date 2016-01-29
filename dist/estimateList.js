'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var EstimateList = (function (_RepresentationList) {
  _inherits(EstimateList, _RepresentationList);

  function EstimateList(client, parent) {
    _classCallCheck(this, EstimateList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EstimateList).call(this, client, parent));

    _this.type = 'estimateList';
    _this.itemType = 'estimate';
    return _this;
  }

  return EstimateList;
})(RepresentationList);

module.exports = EstimateList;