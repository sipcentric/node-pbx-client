'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var IvrList = (function (_RepresentationList) {
  _inherits(IvrList, _RepresentationList);

  function IvrList(client, parent) {
    _classCallCheck(this, IvrList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IvrList).call(this, client, parent));

    _this.type = 'ivrList';
    _this.itemType = 'ivr';
    return _this;
  }

  return IvrList;
})(RepresentationList);

module.exports = IvrList;