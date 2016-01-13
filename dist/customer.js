'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = require('deep-extend');

var Representation = require('./representation');
var CallList = require('./callList');
var Call = require('./call');
var OutgoingcalleridList = require('./outgoingcalleridList');
var Outgoingcallerid = require('./outgoingcallerid');
var PhonebookentryList = require('./phonebookentryList');
var Phonebookentry = require('./phonebookentry');
var PhonenumberList = require('./phonenumberList');
var Phonenumber = require('./phonenumber');
var PromptList = require('./promptList');
var Prompt = require('./prompt');
var RecordingList = require('./recordingList');
var Recording = require('./recording');
var SmsmessageList = require('./smsmessageList');
var Smsmessage = require('./smsmessage');

var Customer = (function (_Representation) {
  _inherits(Customer, _Representation);

  function Customer(client, item) {
    _classCallCheck(this, Customer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Customer).call(this, client));

    extend(_this, item);

    _this.type = 'customer';

    _this.calls = new CallList(_this.client);
    _this.outgoingcallerids = new OutgoingcalleridList(_this.client);
    _this.phonebook = new PhonebookentryList(_this.client);
    _this.phonenumbers = new PhonenumberList(_this.client);
    _this.prompts = new PromptList(_this.client);
    _this.recordings = new RecordingList(_this.client);
    _this.smsmessages = new SmsmessageList(_this.client);

    _this.unavailableMethods = ['delete'];
    _this.unavailableMethods.forEach(function (method) {
      return _this[method] = undefined;
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
          return new Call(this.client, properties);
        case 'outgoingcallerid':
          return new Outgoingcallerid(this.client, properties);
        case 'phonebookentry':
          return new Phonebookentry(this.client, properties);
        case 'phonenumber':
          return new Phonenumber(this.client, properties);
        case 'prompt':
          return new Prompt(this.client, properties);
        case 'recording':
          return new Recording(this.client, properties);
        case 'smsmessage':
          return new Smsmessage(this.client, properties);
        default:
          return false;
      }

      return instance;
    }
  }]);

  return Customer;
})(Representation);

module.exports = Customer;