'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deepExtend = require('deep-extend');

var _deepExtend2 = _interopRequireDefault(_deepExtend);

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

var _availablebundleList = require('./availablebundleList');

var _availablebundleList2 = _interopRequireDefault(_availablebundleList);

var _billingaccountList = require('./billingaccountList');

var _billingaccountList2 = _interopRequireDefault(_billingaccountList);

var _callList = require('./callList');

var _callList2 = _interopRequireDefault(_callList);

var _call = require('./call');

var _call2 = _interopRequireDefault(_call);

var _callbundleList = require('./callbundleList');

var _callbundleList2 = _interopRequireDefault(_callbundleList);

var _creditstatusList = require('./creditstatusList');

var _creditstatusList2 = _interopRequireDefault(_creditstatusList);

var _endpointList = require('./endpointList');

var _endpointList2 = _interopRequireDefault(_endpointList);

var _groupList = require('./groupList');

var _groupList2 = _interopRequireDefault(_groupList);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

var _ivrList = require('./ivrList');

var _ivrList2 = _interopRequireDefault(_ivrList);

var _ivr = require('./ivr');

var _ivr2 = _interopRequireDefault(_ivr);

var _mailboxList = require('./mailboxList');

var _mailboxList2 = _interopRequireDefault(_mailboxList);

var _mailbox = require('./mailbox');

var _mailbox2 = _interopRequireDefault(_mailbox);

var _musicList = require('./musicList');

var _musicList2 = _interopRequireDefault(_musicList);

var _music = require('./music');

var _music2 = _interopRequireDefault(_music);

var _outgoingcalleridList = require('./outgoingcalleridList');

var _outgoingcalleridList2 = _interopRequireDefault(_outgoingcalleridList);

var _phoneList = require('./phoneList');

var _phoneList2 = _interopRequireDefault(_phoneList);

var _phone = require('./phone');

var _phone2 = _interopRequireDefault(_phone);

var _phonebookentryList = require('./phonebookentryList');

var _phonebookentryList2 = _interopRequireDefault(_phonebookentryList);

var _phonebookentry = require('./phonebookentry');

var _phonebookentry2 = _interopRequireDefault(_phonebookentry);

var _phonenumberList = require('./phonenumberList');

var _phonenumberList2 = _interopRequireDefault(_phonenumberList);

var _promptList = require('./promptList');

var _promptList2 = _interopRequireDefault(_promptList);

var _prompt = require('./prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _preferenceList = require('./preferenceList');

var _preferenceList2 = _interopRequireDefault(_preferenceList);

var _queueList = require('./queueList');

var _queueList2 = _interopRequireDefault(_queueList);

var _queue = require('./queue');

var _queue2 = _interopRequireDefault(_queue);

var _recordingList = require('./recordingList');

var _recordingList2 = _interopRequireDefault(_recordingList);

var _smsmessageList = require('./smsmessageList');

var _smsmessageList2 = _interopRequireDefault(_smsmessageList);

var _smsmessage = require('./smsmessage');

var _smsmessage2 = _interopRequireDefault(_smsmessage);

var _soundList = require('./soundList');

var _soundList2 = _interopRequireDefault(_soundList);

var _timeintervalList = require('./timeintervalList');

var _timeintervalList2 = _interopRequireDefault(_timeintervalList);

var _timeinterval = require('./timeinterval');

var _timeinterval2 = _interopRequireDefault(_timeinterval);

var _virtualList = require('./virtualList');

var _virtualList2 = _interopRequireDefault(_virtualList);

var _virtual = require('./virtual');

var _virtual2 = _interopRequireDefault(_virtual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Customer = (function (_Representation) {
  _inherits(Customer, _Representation);

  function Customer(client, item) {
    _classCallCheck(this, Customer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Customer).call(this, client));

    (0, _deepExtend2.default)(_this, item);

    _this.type = 'customer';

    _this.availablebundles = new _availablebundleList2.default(_this.client, _this);
    _this.billing = new _billingaccountList2.default(_this.client, _this);
    _this.calls = new _callList2.default(_this.client, _this);
    _this.callbundles = new _callbundleList2.default(_this.client, _this);
    _this.creditstatus = new _creditstatusList2.default(_this.client, _this);
    _this.endpoints = new _endpointList2.default(_this.client, _this);
    _this.groups = new _groupList2.default(_this.client, _this);
    _this.ivrs = new _ivrList2.default(_this.client, _this);
    _this.mailboxes = new _mailboxList2.default(_this.client, _this);
    _this.music = new _musicList2.default(_this.client, _this);
    _this.outgoingcallerids = new _outgoingcalleridList2.default(_this.client, _this);
    _this.phones = new _phoneList2.default(_this.client, _this);
    _this.phonebook = new _phonebookentryList2.default(_this.client, _this);
    _this.phonenumbers = new _phonenumberList2.default(_this.client, _this);
    _this.prompts = new _promptList2.default(_this.client, _this);
    _this.preferences = new _preferenceList2.default(_this.client, _this);
    _this.queues = new _queueList2.default(_this.client, _this);
    _this.recordings = new _recordingList2.default(_this.client, _this);
    _this.smsmessages = new _smsmessageList2.default(_this.client, _this);
    _this.sounds = new _soundList2.default(_this.client, _this);
    _this.timeintervals = new _timeintervalList2.default(_this.client, _this);
    _this.virtuals = new _virtualList2.default(_this.client, _this);

    _this._unavailableMethods = ['delete'];
    _this._unavailableMethods.forEach(function (method) {
      return delete _this[method];
    });

    return _this;
  }

  _createClass(Customer, [{
    key: 'create',
    value: function create(type, properties) {

      var instance = undefined;

      // Figure out which class to use for this type

      switch (type) {
        case 'call':
          return new _call2.default(this.client, properties, this);
        case 'group':
          return new _group2.default(this.client, properties, this);
        case 'ivr':
          return new _ivr2.default(this.client, properties, this);
        case 'mailbox':
          return new _mailbox2.default(this.client, properties, this);
        case 'music':
          return new _music2.default(this.client, properties, this);
        case 'phone':
          return new _phone2.default(this.client, properties, this);
        case 'phonebookentry':
          return new _phonebookentry2.default(this.client, properties, this);
        case 'prompt':
          return new _prompt2.default(this.client, properties, this);
        case 'queue':
          return new _queue2.default(this.client, properties, this);
        case 'smsmessage':
          return new _smsmessage2.default(this.client, properties, this);
        case 'timeinterval':
          return new _timeinterval2.default(this.client, properties, this);
        case 'virtual':
          return new _virtual2.default(this.client, properties, this);
        default:
          return false;
      }

      return instance;
    }
  }]);

  return Customer;
})(_representation2.default);

exports.default = Customer;