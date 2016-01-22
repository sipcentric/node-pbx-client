'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var SoundList = (function (_RepresentationList) {
  _inherits(SoundList, _RepresentationList);

  function SoundList(client, parent) {
    _classCallCheck(this, SoundList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SoundList).call(this, client, parent));

    _this.type = 'soundList';
    _this.itemType = 'sound';
    return _this;
  }

  return SoundList;
})(RepresentationList);

module.exports = SoundList;