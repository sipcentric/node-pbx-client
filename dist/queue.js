'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

var _queueentriesList = require('./queueentriesList');

var _queueentriesList2 = _interopRequireDefault(_queueentriesList);

var _queuestatusList = require('./queuestatusList');

var _queuestatusList2 = _interopRequireDefault(_queuestatusList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Queue = (function (_Representation) {
  _inherits(Queue, _Representation);

  function Queue(client, properties, parent) {
    _classCallCheck(this, Queue);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Queue).call(this, client, properties, parent));

    _this.type = 'queue';

    _this.entries = new _queueentriesList2.default(_this.client, _this);
    _this.status = new _queuestatusList2.default(_this.client, _this);

    return _this;
  }

  return Queue;
})(_representation2.default);

exports.default = Queue;