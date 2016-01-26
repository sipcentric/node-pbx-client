'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = require('deep-extend');

var Representation = require('./representation');
var AvailablebundleList = require('./availablebundleList');
var Availablebundle = require('./availablebundle');
var CallList = require('./callList');
var Call = require('./call');
var CallbundleList = require('./callbundleList');
var Callbundle = require('./callbundle');
var EndpointList = require('./endpointList');
var GroupList = require('./groupList');
var Group = require('./group');
var IvrList = require('./ivrList');
var Ivr = require('./ivr');
var MailboxList = require('./mailboxList');
var Mailbox = require('./mailbox');
var MusicList = require('./musicList');
var Music = require('./music');
var OutgoingcalleridList = require('./outgoingcalleridList');
var Outgoingcallerid = require('./outgoingcallerid');
var PhoneList = require('./phoneList');
var Phone = require('./phone');
var PhonebookentryList = require('./phonebookentryList');
var Phonebookentry = require('./phonebookentry');
var PhonenumberList = require('./phonenumberList');
var Phonenumber = require('./phonenumber');
var PromptList = require('./promptList');
var Prompt = require('./prompt');
var QueueList = require('./queueList');
var Queue = require('./queue');
var RecordingList = require('./recordingList');
var Recording = require('./recording');
var SmsmessageList = require('./smsmessageList');
var Smsmessage = require('./smsmessage');
var SoundList = require('./soundList');
var TimeintervalList = require('./timeintervalList');
var Timeinterval = require('./timeinterval');
var VirtualList = require('./virtualList');
var Virtual = require('./virtual');

var Customer = (function (_Representation) {
  _inherits(Customer, _Representation);

  function Customer(client, item) {
    _classCallCheck(this, Customer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Customer).call(this, client));

    extend(_this, item);

    _this.type = 'customer';

    _this.availablebundles = new AvailablebundleList(_this.client, _this);
    _this.calls = new CallList(_this.client, _this);
    _this.callbundles = new CallbundleList(_this.client, _this);
    _this.endpoints = new EndpointList(_this.client, _this);
    _this.groups = new GroupList(_this.client, _this);
    _this.ivrs = new IvrList(_this.client, _this);
    _this.mailboxes = new MailboxList(_this.client, _this);
    _this.music = new MusicList(_this.client, _this);
    _this.outgoingcallerids = new OutgoingcalleridList(_this.client, _this);
    _this.phones = new PhoneList(_this.client, _this);
    _this.phonebook = new PhonebookentryList(_this.client, _this);
    _this.phonenumbers = new PhonenumberList(_this.client, _this);
    _this.prompts = new PromptList(_this.client, _this);
    _this.queues = new QueueList(_this.client, _this);
    _this.recordings = new RecordingList(_this.client, _this);
    _this.smsmessages = new SmsmessageList(_this.client, _this);
    _this.sounds = new SoundList(_this.client, _this);
    _this.timeintervals = new TimeintervalList(_this.client, _this);
    _this.virtuals = new VirtualList(_this.client, _this);

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
        case 'availablebundle':
          return new Availablebundle(this.client, properties, this);
        case 'call':
          return new Call(this.client, properties, this);
        case 'callbundle':
          return new Callbundle(this.client, properties, this);
        case 'group':
          return new Group(this.client, properties, this);
        case 'ivr':
          return new Ivr(this.client, properties, this);
        case 'mailbox':
          return new Mailbox(this.client, properties, this);
        case 'music':
          return new Music(this.client, properties, this);
        case 'outgoingcallerid':
          return new Outgoingcallerid(this.client, properties, this);
        case 'phone':
          return new Phone(this.client, properties, this);
        case 'phonebookentry':
          return new Phonebookentry(this.client, properties, this);
        case 'phonenumber':
          return new Phonenumber(this.client, properties, this);
        case 'prompt':
          return new Prompt(this.client, properties, this);
        case 'queue':
          return new Queue(this.client, properties, this);
        case 'recording':
          return new Recording(this.client, properties, this);
        case 'smsmessage':
          return new Smsmessage(this.client, properties, this);
        case 'timeinterval':
          return new Timeinterval(this.client, properties, this);
        case 'virtual':
          return new Virtual(this.client, properties, this);
        default:
          return false;
      }

      return instance;
    }
  }]);

  return Customer;
})(Representation);

module.exports = Customer;