'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

var _routingruleList = require('./routingruleList');

var _routingruleList2 = _interopRequireDefault(_routingruleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Phonenumber = function (_Representation) {
  _inherits(Phonenumber, _Representation);

  function Phonenumber(client, properties, parent) {
    _classCallCheck(this, Phonenumber);

    var _this = _possibleConstructorReturn(this, (Phonenumber.__proto__ || Object.getPrototypeOf(Phonenumber)).call(this, client, properties, parent));

    _this.type = 'phonenumber';

    _this.routingrules = new _routingruleList2.default(_this.client, _this);

    return _this;
  }

  return Phonenumber;
}(_representation2.default);

exports.default = Phonenumber;