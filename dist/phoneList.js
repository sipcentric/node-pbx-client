'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representationList = require('./representationList');

var _representationList2 = _interopRequireDefault(_representationList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhoneList = function (_RepresentationList) {
  _inherits(PhoneList, _RepresentationList);

  function PhoneList(client, parent) {
    _classCallCheck(this, PhoneList);

    var _this = _possibleConstructorReturn(this, (PhoneList.__proto__ || Object.getPrototypeOf(PhoneList)).call(this, client, parent));

    _this.type = 'phoneList';
    _this.itemType = 'phone';
    return _this;
  }

  return PhoneList;
}(_representationList2.default);

exports.default = PhoneList;