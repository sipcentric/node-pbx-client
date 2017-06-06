'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Availablebundle = function (_Representation) {
  _inherits(Availablebundle, _Representation);

  function Availablebundle(client, properties, parent) {
    _classCallCheck(this, Availablebundle);

    var _this = _possibleConstructorReturn(this, (Availablebundle.__proto__ || Object.getPrototypeOf(Availablebundle)).call(this, client, properties, parent));

    _this.type = 'availablebundle';

    return _this;
  }

  return Availablebundle;
}(_representation2.default);

exports.default = Availablebundle;
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

var AvailablebundleList = function (_RepresentationList) {
  _inherits(AvailablebundleList, _RepresentationList);

  function AvailablebundleList(client, parent) {
    _classCallCheck(this, AvailablebundleList);

    var _this = _possibleConstructorReturn(this, (AvailablebundleList.__proto__ || Object.getPrototypeOf(AvailablebundleList)).call(this, client, parent));

    _this.type = 'availablebundleList';
    _this.itemType = 'availablebundle';
    return _this;
  }

  return AvailablebundleList;
}(_representationList2.default);

exports.default = AvailablebundleList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

var _estimateList = require('./estimateList');

var _estimateList2 = _interopRequireDefault(_estimateList);

var _invoiceList = require('./invoiceList');

var _invoiceList2 = _interopRequireDefault(_invoiceList);

var _paymentmethodList = require('./paymentmethodList');

var _paymentmethodList2 = _interopRequireDefault(_paymentmethodList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Billingaccount = function (_Representation) {
  _inherits(Billingaccount, _Representation);

  function Billingaccount(client, properties, parent) {
    _classCallCheck(this, Billingaccount);

    var _this = _possibleConstructorReturn(this, (Billingaccount.__proto__ || Object.getPrototypeOf(Billingaccount)).call(this, client, properties, parent));

    _this.type = 'billingaccount';

    _this.invoices = new _invoiceList2.default(_this.client, _this);
    _this.estimate = new _estimateList2.default(_this.client, _this);
    _this.paymentmethods = new _paymentmethodList2.default(_this.client, _this);

    return _this;
  }

  return Billingaccount;
}(_representation2.default);

exports.default = Billingaccount;
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

var BillingaccountList = function (_RepresentationList) {
  _inherits(BillingaccountList, _RepresentationList);

  function BillingaccountList(client, parent) {
    _classCallCheck(this, BillingaccountList);

    var _this = _possibleConstructorReturn(this, (BillingaccountList.__proto__ || Object.getPrototypeOf(BillingaccountList)).call(this, client, parent));

    _this.type = 'billingaccountList';
    _this.itemType = 'billingaccount';
    return _this;
  }

  return BillingaccountList;
}(_representationList2.default);

exports.default = BillingaccountList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Call = function (_Representation) {
  _inherits(Call, _Representation);

  function Call(client, properties, parent) {
    _classCallCheck(this, Call);

    var _this = _possibleConstructorReturn(this, (Call.__proto__ || Object.getPrototypeOf(Call)).call(this, client, properties, parent));

    _this.type = 'call';

    return _this;
  }

  return Call;
}(_representation2.default);

exports.default = Call;
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

var CallList = function (_RepresentationList) {
  _inherits(CallList, _RepresentationList);

  function CallList(client, parent) {
    _classCallCheck(this, CallList);

    var _this = _possibleConstructorReturn(this, (CallList.__proto__ || Object.getPrototypeOf(CallList)).call(this, client, parent));

    _this.type = 'callList';
    _this.itemType = 'call';
    return _this;
  }

  return CallList;
}(_representationList2.default);

exports.default = CallList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Callbundle = function (_Representation) {
  _inherits(Callbundle, _Representation);

  function Callbundle(client, properties, parent) {
    _classCallCheck(this, Callbundle);

    var _this = _possibleConstructorReturn(this, (Callbundle.__proto__ || Object.getPrototypeOf(Callbundle)).call(this, client, properties, parent));

    _this.type = 'callbundle';

    return _this;
  }

  return Callbundle;
}(_representation2.default);

exports.default = Callbundle;
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

var CallbundleList = function (_RepresentationList) {
  _inherits(CallbundleList, _RepresentationList);

  function CallbundleList(client, parent) {
    _classCallCheck(this, CallbundleList);

    var _this = _possibleConstructorReturn(this, (CallbundleList.__proto__ || Object.getPrototypeOf(CallbundleList)).call(this, client, parent));

    _this.type = 'callbundleList';
    _this.itemType = 'callbundle';
    return _this;
  }

  return CallbundleList;
}(_representationList2.default);

exports.default = CallbundleList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Creditstatus = function (_Representation) {
  _inherits(Creditstatus, _Representation);

  function Creditstatus(client, properties, parent) {
    _classCallCheck(this, Creditstatus);

    var _this = _possibleConstructorReturn(this, (Creditstatus.__proto__ || Object.getPrototypeOf(Creditstatus)).call(this, client, properties, parent));

    _this.type = 'creditstatus';

    return _this;
  }

  return Creditstatus;
}(_representation2.default);

exports.default = Creditstatus;
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

var CreditstatusList = function (_RepresentationList) {
  _inherits(CreditstatusList, _RepresentationList);

  function CreditstatusList(client, parent) {
    _classCallCheck(this, CreditstatusList);

    var _this = _possibleConstructorReturn(this, (CreditstatusList.__proto__ || Object.getPrototypeOf(CreditstatusList)).call(this, client, parent));

    _this.type = 'creditstatusList';
    _this.itemType = 'creditstatus';
    return _this;
  }

  return CreditstatusList;
}(_representationList2.default);

exports.default = CreditstatusList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var Customer = function (_Representation) {
  _inherits(Customer, _Representation);

  function Customer(client, item) {
    _classCallCheck(this, Customer);

    var _this = _possibleConstructorReturn(this, (Customer.__proto__ || Object.getPrototypeOf(Customer)).call(this, client));

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

      var instance = void 0;

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
}(_representation2.default);

exports.default = Customer;
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

var CustomerList = function (_RepresentationList) {
  _inherits(CustomerList, _RepresentationList);

  function CustomerList(client) {
    _classCallCheck(this, CustomerList);

    var _this = _possibleConstructorReturn(this, (CustomerList.__proto__ || Object.getPrototypeOf(CustomerList)).call(this, client));

    _this.type = 'customerList';
    _this.itemType = 'customer';
    return _this;
  }

  return CustomerList;
}(_representationList2.default);

exports.default = CustomerList;
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

var EndpointList = function (_RepresentationList) {
  _inherits(EndpointList, _RepresentationList);

  function EndpointList(client, parent) {
    _classCallCheck(this, EndpointList);

    var _this = _possibleConstructorReturn(this, (EndpointList.__proto__ || Object.getPrototypeOf(EndpointList)).call(this, client, parent));

    _this.type = 'endpointList';
    _this.itemType = 'endpoint';
    return _this;
  }

  return EndpointList;
}(_representationList2.default);

exports.default = EndpointList;
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

var EstimateList = function (_RepresentationList) {
  _inherits(EstimateList, _RepresentationList);

  function EstimateList(client, parent) {
    _classCallCheck(this, EstimateList);

    var _this = _possibleConstructorReturn(this, (EstimateList.__proto__ || Object.getPrototypeOf(EstimateList)).call(this, client, parent));

    _this.type = 'estimateList';
    _this.itemType = 'estimate';
    return _this;
  }

  return EstimateList;
}(_representationList2.default);

exports.default = EstimateList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Forwardingrule = function (_Representation) {
  _inherits(Forwardingrule, _Representation);

  function Forwardingrule(client, properties, parent) {
    _classCallCheck(this, Forwardingrule);

    var _this = _possibleConstructorReturn(this, (Forwardingrule.__proto__ || Object.getPrototypeOf(Forwardingrule)).call(this, client, properties, parent));

    _this.type = 'forwardingrule';

    return _this;
  }

  return Forwardingrule;
}(_representation2.default);

exports.default = Forwardingrule;
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

var ForwardingruleList = function (_RepresentationList) {
  _inherits(ForwardingruleList, _RepresentationList);

  function ForwardingruleList(client, parent) {
    _classCallCheck(this, ForwardingruleList);

    var _this = _possibleConstructorReturn(this, (ForwardingruleList.__proto__ || Object.getPrototypeOf(ForwardingruleList)).call(this, client, parent));

    _this.type = 'forwardingruleList';
    _this.itemType = 'forwardingrule';
    return _this;
  }

  return ForwardingruleList;
}(_representationList2.default);

exports.default = ForwardingruleList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_Representation) {
  _inherits(Group, _Representation);

  function Group(client, properties, parent) {
    _classCallCheck(this, Group);

    var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, client, properties, parent));

    _this.type = 'group';

    return _this;
  }

  return Group;
}(_representation2.default);

exports.default = Group;
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

var GroupList = function (_RepresentationList) {
  _inherits(GroupList, _RepresentationList);

  function GroupList(client, parent) {
    _classCallCheck(this, GroupList);

    var _this = _possibleConstructorReturn(this, (GroupList.__proto__ || Object.getPrototypeOf(GroupList)).call(this, client, parent));

    _this.type = 'groupList';
    _this.itemType = 'group';
    return _this;
  }

  return GroupList;
}(_representationList2.default);

exports.default = GroupList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Invoice = function (_Representation) {
  _inherits(Invoice, _Representation);

  function Invoice(client, properties, parent) {
    _classCallCheck(this, Invoice);

    var _this = _possibleConstructorReturn(this, (Invoice.__proto__ || Object.getPrototypeOf(Invoice)).call(this, client, properties, parent));

    _this.type = 'invoice';

    return _this;
  }

  return Invoice;
}(_representation2.default);

exports.default = Invoice;
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

var InvoiceList = function (_RepresentationList) {
  _inherits(InvoiceList, _RepresentationList);

  function InvoiceList(client, parent) {
    _classCallCheck(this, InvoiceList);

    var _this = _possibleConstructorReturn(this, (InvoiceList.__proto__ || Object.getPrototypeOf(InvoiceList)).call(this, client, parent));

    _this.type = 'invoiceList';
    _this.itemType = 'invoice';
    return _this;
  }

  return InvoiceList;
}(_representationList2.default);

exports.default = InvoiceList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ivr = function (_Representation) {
  _inherits(Ivr, _Representation);

  function Ivr(client, properties, parent) {
    _classCallCheck(this, Ivr);

    var _this = _possibleConstructorReturn(this, (Ivr.__proto__ || Object.getPrototypeOf(Ivr)).call(this, client, properties, parent));

    _this.type = 'ivr';

    return _this;
  }

  return Ivr;
}(_representation2.default);

exports.default = Ivr;
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

var IvrList = function (_RepresentationList) {
  _inherits(IvrList, _RepresentationList);

  function IvrList(client, parent) {
    _classCallCheck(this, IvrList);

    var _this = _possibleConstructorReturn(this, (IvrList.__proto__ || Object.getPrototypeOf(IvrList)).call(this, client, parent));

    _this.type = 'ivrList';
    _this.itemType = 'ivr';
    return _this;
  }

  return IvrList;
}(_representationList2.default);

exports.default = IvrList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mailbox = function (_Representation) {
  _inherits(Mailbox, _Representation);

  function Mailbox(client, properties, parent) {
    _classCallCheck(this, Mailbox);

    var _this = _possibleConstructorReturn(this, (Mailbox.__proto__ || Object.getPrototypeOf(Mailbox)).call(this, client, properties, parent));

    _this.type = 'mailbox';

    return _this;
  }

  return Mailbox;
}(_representation2.default);

exports.default = Mailbox;
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

var MailboxList = function (_RepresentationList) {
  _inherits(MailboxList, _RepresentationList);

  function MailboxList(client, parent) {
    _classCallCheck(this, MailboxList);

    var _this = _possibleConstructorReturn(this, (MailboxList.__proto__ || Object.getPrototypeOf(MailboxList)).call(this, client, parent));

    _this.type = 'mailboxList';
    _this.itemType = 'mailbox';
    return _this;
  }

  return MailboxList;
}(_representationList2.default);

exports.default = MailboxList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Music = function (_Representation) {
  _inherits(Music, _Representation);

  function Music(client, properties, parent) {
    _classCallCheck(this, Music);

    var _this = _possibleConstructorReturn(this, (Music.__proto__ || Object.getPrototypeOf(Music)).call(this, client, properties, parent));

    _this.type = 'music';

    return _this;
  }

  return Music;
}(_representation2.default);

exports.default = Music;
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

var MusicList = function (_RepresentationList) {
  _inherits(MusicList, _RepresentationList);

  function MusicList(client, parent) {
    _classCallCheck(this, MusicList);

    var _this = _possibleConstructorReturn(this, (MusicList.__proto__ || Object.getPrototypeOf(MusicList)).call(this, client, parent));

    _this.type = 'musicList';
    _this.itemType = 'music';
    return _this;
  }

  return MusicList;
}(_representationList2.default);

exports.default = MusicList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// Promise + callback polyfill


var _request2 = require('request');

var _request3 = _interopRequireDefault(_request2);

var _deepExtend = require('deep-extend');

var _deepExtend2 = _interopRequireDefault(_deepExtend);

var _availablebundle = require('./availablebundle');

var _availablebundle2 = _interopRequireDefault(_availablebundle);

var _billingaccount = require('./billingaccount');

var _billingaccount2 = _interopRequireDefault(_billingaccount);

var _call = require('./call');

var _call2 = _interopRequireDefault(_call);

var _callbundle = require('./callbundle');

var _callbundle2 = _interopRequireDefault(_callbundle);

var _creditstatus = require('./creditstatus');

var _creditstatus2 = _interopRequireDefault(_creditstatus);

var _customer = require('./customer');

var _customer2 = _interopRequireDefault(_customer);

var _customerList = require('./customerList');

var _customerList2 = _interopRequireDefault(_customerList);

var _forwardingrule = require('./forwardingrule');

var _forwardingrule2 = _interopRequireDefault(_forwardingrule);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

var _invoice = require('./invoice');

var _invoice2 = _interopRequireDefault(_invoice);

var _ivr = require('./ivr');

var _ivr2 = _interopRequireDefault(_ivr);

var _mailbox = require('./mailbox');

var _mailbox2 = _interopRequireDefault(_mailbox);

var _music = require('./music');

var _music2 = _interopRequireDefault(_music);

var _outgoingcallerid = require('./outgoingcallerid');

var _outgoingcallerid2 = _interopRequireDefault(_outgoingcallerid);

var _paymentmethod = require('./paymentmethod');

var _paymentmethod2 = _interopRequireDefault(_paymentmethod);

var _phone = require('./phone');

var _phone2 = _interopRequireDefault(_phone);

var _phonebookentry = require('./phonebookentry');

var _phonebookentry2 = _interopRequireDefault(_phonebookentry);

var _phonenumber = require('./phonenumber');

var _phonenumber2 = _interopRequireDefault(_phonenumber);

var _preference = require('./preference');

var _preference2 = _interopRequireDefault(_preference);

var _prompt = require('./prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _queue = require('./queue');

var _queue2 = _interopRequireDefault(_queue);

var _queueentries = require('./queueentries');

var _queueentries2 = _interopRequireDefault(_queueentries);

var _queuestatus = require('./queuestatus');

var _queuestatus2 = _interopRequireDefault(_queuestatus);

var _stream = require('./stream');

var _stream2 = _interopRequireDefault(_stream);

var _recording = require('./recording');

var _recording2 = _interopRequireDefault(_recording);

var _routingrule = require('./routingrule');

var _routingrule2 = _interopRequireDefault(_routingrule);

var _sipidentity = require('./sipidentity');

var _sipidentity2 = _interopRequireDefault(_sipidentity);

var _sipregistration = require('./sipregistration');

var _sipregistration2 = _interopRequireDefault(_sipregistration);

var _smsmessage = require('./smsmessage');

var _smsmessage2 = _interopRequireDefault(_smsmessage);

var _timeinterval = require('./timeinterval');

var _timeinterval2 = _interopRequireDefault(_timeinterval);

var _virtual = require('./virtual');

var _virtual2 = _interopRequireDefault(_virtual);

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

var _representationList = require('./representationList');

var _representationList2 = _interopRequireDefault(_representationList);

var _nodeify = require('./polyfills/nodeify');

var _nodeify2 = _interopRequireDefault(_nodeify);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Promise.prototype.nodeify = _nodeify2.default; // eslint-disable-line no-extend-native

// Package version

var VERSION = _package2.default.version;

var Nimvelo = function () {
  function Nimvelo(options) {
    _classCallCheck(this, Nimvelo);

    this.VERSION = VERSION;

    if (typeof options !== 'undefined') {

      if (options.hasOwnProperty('username') && options.hasOwnProperty('password')) {

        // If we've got the credentials then encode and format them
        var encodedAuth = new Buffer(options.username + ':' + options.password).toString('base64');

        this.authorization = 'Basic ' + encodedAuth;
      }
    }

    // Merge the default options with the client submitted options
    this.options = (0, _deepExtend2.default)({
      username: null,
      password: null,
      customer: 'me',
      restBase: 'https://pbx.sipcentric.com/api/v1/customers/',
      streamBase: 'https://pbx.sipcentric.com/api/v1/stream',
      json: true,
      requestOptions: {
        headers: {
          'Accept': 'application/json',
          'Authorization': this.authorization,
          'Content-Type': 'application/json',
          'User-Agent': 'node-nimvelo/' + VERSION,
          'X-Relationship-Key': 'id'
        }
      }
    }, options);

    // Build a request object
    this.request = _request3.default.defaults((0, _deepExtend2.default)(
    // Pass the client submitted request options
    this.options.requestOptions));

    this.customers = new _customerList2.default(this);
    this.stream = new _stream2.default(this);
  }

  _createClass(Nimvelo, [{
    key: '_pathForType',
    value: function _pathForType(type, id) {

      var path = '';
      var normalizedType = type.toLowerCase();

      switch (normalizedType) {
        case 'availablebundle':
          path = id + '/callbundles/available';
          break;
        case 'billingaccount':
          path = id + '/billing';
          break;
        case 'creditstatus':
          path = id + '/creditstatus';
          break;
        case 'customers':
          // Use the default base REST URL
          break;
        case 'customer':
          path = id || '';
          break;
        case 'estimate':
          path = 'estimate';
          break;
        case 'phone':
        case 'virtual':
        case 'group':
        case 'queue':
        case 'ivr':
        case 'mailbox':
          path = id + '/endpoints';
          break;
        case 'invoice':
          path = 'invoices';
          break;
        case 'phonebookentry':
          path = id + '/phonebook';
          break;
        case 'paymentmethod':
          path = 'paymentmethods';
          break;
        case 'queueentries':
          path = id + '/queueentries';
          break;
        case 'queuestatus':
          path = id + '/queuestatus';
          break;
        case 'sipidentity':
          path = id + '/sip';
          break;
        case 'sipregistration':
          path = 'registrations';
          break;
        case 'smsmessage':
          path = id + '/sms';
          break;
        case 'sound':
        case 'prompt':
        case 'music':
          path = id + '/sounds';
          break;
        default:
          path = id + '/' + normalizedType + 's';
          break;
      }

      return path;
    }
  }, {
    key: '_paramsForType',
    value: function _paramsForType(type) {

      var params = {};
      var normalizedType = type.toLowerCase();

      switch (normalizedType) {
        case 'phone':
        case 'virtual':
        case 'group':
        case 'queue':
        case 'ivr':
        case 'mailbox':
          params.type = type;
          break;
        case 'prompt':
        case 'music':
          params.type = type;
          break;
        default:
          break;
      }

      return params;
    }
  }, {
    key: '_objectFromItem',
    value: function _objectFromItem(item, parent) {

      if (typeof item === 'undefined' || !item.hasOwnProperty('type')) {
        return item;
      }

      var object = void 0;

      // Figure out which class to use for this type

      switch (item.type) {
        /* eslint no-use-before-define: 0 */
        case 'availablebundle':
          object = new _availablebundle2.default(this, item, parent);
          break;
        case 'billingaccount':
          object = new _billingaccount2.default(this, item, parent);
          break;
        case 'call':
          object = new _call2.default(this, item, parent);
          break;
        case 'callbundle':
          object = new _callbundle2.default(this, item, parent);
          break;
        case 'creditstatus':
          object = new _creditstatus2.default(this, item, parent);
          break;
        case 'customer':
          object = new _customer2.default(this, item);
          break;
        case 'did':
          object = new _phonenumber2.default(this, item, parent);
          break;
        case 'forwardingrule':
          object = new _forwardingrule2.default(this, item, parent);
          break;
        case 'group':
          object = new _group2.default(this, item, parent);
          break;
        case 'invoice':
          object = new _invoice2.default(this, item, parent);
          break;
        case 'ivr':
          object = new _ivr2.default(this, item, parent);
          break;
        case 'mailbox':
          object = new _mailbox2.default(this, item, parent);
          break;
        case 'music':
          object = new _music2.default(this, item, parent);
          break;
        case 'outgoingcallerid':
          object = new _outgoingcallerid2.default(this, item, parent);
          break;
        case 'paymentmethod':
        case 'worldpay':
          object = new _paymentmethod2.default(this, item, parent);
          break;
        case 'phone':
          object = new _phone2.default(this, item, parent);
          break;
        case 'phonebookentry':
          object = new _phonebookentry2.default(this, item, parent);
          break;
        case 'prompt':
          object = new _prompt2.default(this, item, parent);
          break;
        case 'preference':
          object = new _preference2.default(this, item, parent);
          break;
        case 'queue':
          object = new _queue2.default(this, item, parent);
          break;
        case 'queueentries':
          object = new _queueentries2.default(this, item, parent);
          break;
        case 'queuestatus':
          object = new _queuestatus2.default(this, item, parent);
          break;
        case 'recording':
          object = new _recording2.default(this, item, parent);
          break;
        case 'routingrule':
          object = new _routingrule2.default(this, item, parent);
          break;
        case 'smsmessage':
          object = new _smsmessage2.default(this, item, parent);
          break;
        case 'sipidentity':
          object = new _sipidentity2.default(this, item, parent);
          break;
        case 'sipregistration':
          object = new _sipregistration2.default(this, item, parent);
          break;
        case 'timeinterval':
          object = new _timeinterval2.default(this, item, parent);
          break;
        case 'virtual':
          object = new _virtual2.default(this, item, parent);
          break;
        default:
          object = item;
          break;
      }

      return object;
    }
  }, {
    key: '_buildObjects',
    value: function _buildObjects(items, parent) {
      var _this = this;

      // Builds an array of class objects from a given array of items,
      // or returns a single class object if we only give it one object

      return Array.isArray(items) ? items.map(function (item) {
        return _this._objectFromItem(item, parent);
      }) : this._objectFromItem(items, parent);
    }
  }, {
    key: '_request',
    value: function _request(method, url, params, callback) {
      var _this2 = this;

      /* eslint no-param-reassign:0 */

      // Normalize method
      method = method.toLowerCase();

      if (typeof params === 'function') {
        callback = params;
        params = null;
      }

      var json = {};

      // Filter out properties which shouldn't be sent back to the server in
      // the json body. This won't affect query params
      for (var key in params) {

        if (params.hasOwnProperty(key)) {

          var property = params[key];
          if (key.charAt(0) !== '_' && key !== 'client' && key !== 'parent' && !(property instanceof _representation2.default) && !(property instanceof _representationList2.default)) {

            json[key] = property;
          }
        }
      }

      var options = {
        method: method,
        url: url,
        json: json
      };

      return new Promise(function (resolve, reject) {

        // Make the request

        _this2.request(options, function makeRequest(error, response, data) {

          if (error) {

            // If there's an error, reject
            reject(error);
          } else {

            var parsedData = void 0;

            if (data && typeof data === 'string') {

              try {

                // If we've got data, and it's a string, try to parse it as JSON
                parsedData = JSON.parse(data);
              } catch (parseError) {

                // If we can't parse it, reject

                reject(new Error('Error parsing JSON. Status Code: ' + response.statusCode));

                return;
              }
            } else {

              parsedData = data;
            }

            if (parsedData && typeof parsedData.errors !== 'undefined') {

              // If there are some errors returned, reject

              reject(parsedData.errors);
            } else if (response.statusCode < 200 || response.statusCode >= 300) {

              // If we don't get the correct status back for the method, reject

              reject(new Error('Status Code: ' + response.statusCode));
            } else {

              // If we've got this far, then there are no errors and we can resolve

              resolve(parsedData);
            }
          }
        });
      }).nodeify(callback);
    }
  }, {
    key: '_buildUrl',
    value: function _buildUrl(type, object) {

      var url = void 0;
      var id = void 0;
      var params = {};

      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      args.forEach(function (arg) {

        switch (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) {
          case 'string':
          case 'number':
            id = arg;
            break;
          case 'object':
            params = arg;
            break;
          default:
            break;
        }
      });

      (0, _deepExtend2.default)(params, this._paramsForType(type));

      url = this._buildUrlSection(type, object);
      url += typeof id !== 'undefined' ? id + '/' : '';
      url += Object.keys(params).length > 0 ? this._paramsToQueryString(params) : '';

      return url;
    }
  }, {
    key: '_buildUrlSection',
    value: function _buildUrlSection(type, object) {
      var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      /* eslint no-param-reassign:0 */

      var path = void 0;
      var baseUrl = this.options.restBase;

      if (object.parent) {

        path = this._pathForType(type, object.parent.id);

        url = (path ? path + '/' : '') + url;
        url = this._buildUrlSection(object.parent.type, object.parent, url);
      } else {

        path = this._pathForType(type);

        url = baseUrl + (path ? path + '/' : '') + (url ? url : '');
      }

      return url;
    }
  }, {
    key: '_paramsToQueryString',
    value: function _paramsToQueryString(params) {

      if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {

        var string = Object.keys(params).reduce(function (prev, key, index) {

          var startChar = '&';

          if (index === 0) {
            startChar = '?';
          }

          return '' + prev + startChar + key + '=' + params[key];
        }, '');

        return string;
      } else if (typeof params === 'string') {

        return params;
      } else {

        return '';
      }
    }
  }, {
    key: '_formatGetResponse',
    value: function _formatGetResponse(response, parent) {
      var _this3 = this;

      if (response.hasOwnProperty('items')) {

        var items = this._buildObjects(response.items, parent);

        delete response.items;

        var meta = response;

        if (meta.hasOwnProperty('nextPage')) {

          var nextPageUrl = meta.nextPage;
          meta.nextPage = function (callback) {

            return new Promise(function (resolve, reject) {
              _this3._request('get', nextPageUrl).then(function (data) {
                var formattedResponse = _this3._formatGetResponse(data, parent);
                resolve(formattedResponse);
              }, reject);
            }).nodeify(callback);
          };
        }

        if (meta.hasOwnProperty('prevPage')) {

          var prevPageUrl = meta.prevPage;
          meta.prevPage = function (callback) {

            return new Promise(function (resolve, reject) {
              _this3._request('get', prevPageUrl).then(function (data) {
                var formattedResponse = _this3._formatGetResponse(data, parent);
                resolve(formattedResponse);
              }, reject);
            }).nodeify(callback);
          };
        }

        return { meta: meta, items: items };
      } else {

        return this._buildObjects(response, parent);
      }
    }
  }, {
    key: '_getResource',
    value: function _getResource(type, object) {
      var _this4 = this;

      var id = void 0;
      var params = void 0;
      var callback = void 0;

      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      args.forEach(function (arg) {

        switch (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) {
          case 'string':
          case 'number':
            id = arg;
            break;
          case 'object':
            params = arg;
            break;
          case 'function':
            callback = arg;
            break;
          default:
            break;
        }
      });

      var url = this._buildUrl(type, object, id, params);

      return new Promise(function (resolve, reject) {

        _this4._request('get', url).then(function (data) {

          var formattedResponse = _this4._formatGetResponse(data, object.parent);

          resolve(formattedResponse);
        }, function (error) {

          reject(error);
        });
      }).nodeify(callback);
    }
  }, {
    key: '_saveRepresentation',
    value: function _saveRepresentation(object, callback) {
      var _this5 = this;

      var url = this._buildUrl(object.type, object, object.id);
      var requestMethod = object.id ? 'put' : 'post';

      return new Promise(function (resolve, reject) {

        _this5._request(requestMethod, url, object).then(function (data) {

          // Update our object with the newly returned propreties
          (0, _deepExtend2.default)(object, data);

          resolve(data);
        }, reject);
      }).nodeify(callback);
    }
  }, {
    key: '_deleteRepresentation',
    value: function _deleteRepresentation(object, callback) {
      var _this6 = this;

      var url = this._buildUrl(object.type, object, object.id);

      return new Promise(function (resolve, reject) {

        _this6._request('delete', url, object).then(resolve, reject);
      }).nodeify(callback);
    }
  }]);

  return Nimvelo;
}();

exports.default = Nimvelo;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Outgoingcallerid = function (_Representation) {
  _inherits(Outgoingcallerid, _Representation);

  function Outgoingcallerid(client, properties, parent) {
    _classCallCheck(this, Outgoingcallerid);

    var _this = _possibleConstructorReturn(this, (Outgoingcallerid.__proto__ || Object.getPrototypeOf(Outgoingcallerid)).call(this, client, properties, parent));

    _this.type = 'outgoingcallerid';

    _this._unavailableMethods = ['save', 'delete'];
    _this._unavailableMethods.forEach(function (method) {
      return delete _this[method];
    });

    return _this;
  }

  return Outgoingcallerid;
}(_representation2.default);

exports.default = Outgoingcallerid;
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

var OutgoingcalleridList = function (_RepresentationList) {
  _inherits(OutgoingcalleridList, _RepresentationList);

  function OutgoingcalleridList(client, parent) {
    _classCallCheck(this, OutgoingcalleridList);

    var _this = _possibleConstructorReturn(this, (OutgoingcalleridList.__proto__ || Object.getPrototypeOf(OutgoingcalleridList)).call(this, client, parent));

    _this.type = 'outgoingcalleridList';
    _this.itemType = 'outgoingcallerid';
    return _this;
  }

  return OutgoingcalleridList;
}(_representationList2.default);

exports.default = OutgoingcalleridList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paymentmethod = function (_Representation) {
  _inherits(Paymentmethod, _Representation);

  function Paymentmethod(client, properties, parent) {
    _classCallCheck(this, Paymentmethod);

    var _this = _possibleConstructorReturn(this, (Paymentmethod.__proto__ || Object.getPrototypeOf(Paymentmethod)).call(this, client, properties, parent));

    _this.type = 'paymentmethod';

    return _this;
  }

  return Paymentmethod;
}(_representation2.default);

exports.default = Paymentmethod;
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

var Paymentmethod = function (_RepresentationList) {
  _inherits(Paymentmethod, _RepresentationList);

  function Paymentmethod(client, parent) {
    _classCallCheck(this, Paymentmethod);

    var _this = _possibleConstructorReturn(this, (Paymentmethod.__proto__ || Object.getPrototypeOf(Paymentmethod)).call(this, client, parent));

    _this.type = 'paymentmethodList';
    _this.itemType = 'paymentmethod';
    return _this;
  }

  return Paymentmethod;
}(_representationList2.default);

exports.default = Paymentmethod;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

var _forwardingruleList = require('./forwardingruleList');

var _forwardingruleList2 = _interopRequireDefault(_forwardingruleList);

var _sipidentityList = require('./sipidentityList');

var _sipidentityList2 = _interopRequireDefault(_sipidentityList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Phone = function (_Representation) {
  _inherits(Phone, _Representation);

  function Phone(client, properties, parent) {
    _classCallCheck(this, Phone);

    var _this = _possibleConstructorReturn(this, (Phone.__proto__ || Object.getPrototypeOf(Phone)).call(this, client, properties, parent));

    _this.type = 'phone';

    _this.sip = new _sipidentityList2.default(_this.client, _this);
    _this.forwardingrules = new _forwardingruleList2.default(_this.client, _this);

    return _this;
  }

  return Phone;
}(_representation2.default);

exports.default = Phone;
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Phonebookentry = function (_Representation) {
  _inherits(Phonebookentry, _Representation);

  function Phonebookentry(client, properties, parent) {
    _classCallCheck(this, Phonebookentry);

    var _this = _possibleConstructorReturn(this, (Phonebookentry.__proto__ || Object.getPrototypeOf(Phonebookentry)).call(this, client, properties, parent));

    _this.type = 'phonebookentry';

    return _this;
  }

  return Phonebookentry;
}(_representation2.default);

exports.default = Phonebookentry;
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

var PhonebookentryList = function (_RepresentationList) {
  _inherits(PhonebookentryList, _RepresentationList);

  function PhonebookentryList(client, parent) {
    _classCallCheck(this, PhonebookentryList);

    var _this = _possibleConstructorReturn(this, (PhonebookentryList.__proto__ || Object.getPrototypeOf(PhonebookentryList)).call(this, client, parent));

    _this.type = 'phonebookentryList';
    _this.itemType = 'phonebookentry';
    return _this;
  }

  return PhonebookentryList;
}(_representationList2.default);

exports.default = PhonebookentryList;
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

var PhonenumberList = function (_RepresentationList) {
  _inherits(PhonenumberList, _RepresentationList);

  function PhonenumberList(client, parent) {
    _classCallCheck(this, PhonenumberList);

    var _this = _possibleConstructorReturn(this, (PhonenumberList.__proto__ || Object.getPrototypeOf(PhonenumberList)).call(this, client, parent));

    _this.type = 'phonenumberList';
    _this.itemType = 'phonenumber';

    _this._unavailableMethods = ['create'];
    _this._unavailableMethods.forEach(function (method) {
      return delete _this[method];
    });

    return _this;
  }

  return PhonenumberList;
}(_representationList2.default);

exports.default = PhonenumberList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preference = function (_Representation) {
  _inherits(Preference, _Representation);

  function Preference(client, properties, parent) {
    _classCallCheck(this, Preference);

    var _this = _possibleConstructorReturn(this, (Preference.__proto__ || Object.getPrototypeOf(Preference)).call(this, client, properties, parent));

    _this.type = 'preference';

    return _this;
  }

  return Preference;
}(_representation2.default);

exports.default = Preference;
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

var PreferenceList = function (_RepresentationList) {
  _inherits(PreferenceList, _RepresentationList);

  function PreferenceList(client, parent) {
    _classCallCheck(this, PreferenceList);

    var _this = _possibleConstructorReturn(this, (PreferenceList.__proto__ || Object.getPrototypeOf(PreferenceList)).call(this, client, parent));

    _this.type = 'preferenceList';
    _this.itemType = 'preference';
    return _this;
  }

  return PreferenceList;
}(_representationList2.default);

exports.default = PreferenceList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Prompt = function (_Representation) {
  _inherits(Prompt, _Representation);

  function Prompt(client, properties, parent) {
    _classCallCheck(this, Prompt);

    var _this = _possibleConstructorReturn(this, (Prompt.__proto__ || Object.getPrototypeOf(Prompt)).call(this, client, properties, parent));

    _this.type = 'prompt';

    return _this;
  }

  return Prompt;
}(_representation2.default);

exports.default = Prompt;
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

var PromptList = function (_RepresentationList) {
  _inherits(PromptList, _RepresentationList);

  function PromptList(client, parent) {
    _classCallCheck(this, PromptList);

    var _this = _possibleConstructorReturn(this, (PromptList.__proto__ || Object.getPrototypeOf(PromptList)).call(this, client, parent));

    _this.type = 'promptList';
    _this.itemType = 'prompt';
    return _this;
  }

  return PromptList;
}(_representationList2.default);

exports.default = PromptList;
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

var Queue = function (_Representation) {
  _inherits(Queue, _Representation);

  function Queue(client, properties, parent) {
    _classCallCheck(this, Queue);

    var _this = _possibleConstructorReturn(this, (Queue.__proto__ || Object.getPrototypeOf(Queue)).call(this, client, properties, parent));

    _this.type = 'queue';

    _this.entries = new _queueentriesList2.default(_this.client, _this);
    _this.status = new _queuestatusList2.default(_this.client, _this);

    return _this;
  }

  return Queue;
}(_representation2.default);

exports.default = Queue;
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

var QueueList = function (_RepresentationList) {
  _inherits(QueueList, _RepresentationList);

  function QueueList(client, parent) {
    _classCallCheck(this, QueueList);

    var _this = _possibleConstructorReturn(this, (QueueList.__proto__ || Object.getPrototypeOf(QueueList)).call(this, client, parent));

    _this.type = 'queueList';
    _this.itemType = 'queue';
    return _this;
  }

  return QueueList;
}(_representationList2.default);

exports.default = QueueList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Queueentries = function (_Representation) {
  _inherits(Queueentries, _Representation);

  function Queueentries(client, properties, parent) {
    _classCallCheck(this, Queueentries);

    var _this = _possibleConstructorReturn(this, (Queueentries.__proto__ || Object.getPrototypeOf(Queueentries)).call(this, client, properties, parent));

    _this.type = 'queueentries';

    return _this;
  }

  return Queueentries;
}(_representation2.default);

exports.default = Queueentries;
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

var QueueentriesList = function (_RepresentationList) {
  _inherits(QueueentriesList, _RepresentationList);

  function QueueentriesList(client, parent) {
    _classCallCheck(this, QueueentriesList);

    var _this = _possibleConstructorReturn(this, (QueueentriesList.__proto__ || Object.getPrototypeOf(QueueentriesList)).call(this, client, parent));

    _this.type = 'queueentriesList';
    _this.itemType = 'queueentries';
    return _this;
  }

  return QueueentriesList;
}(_representationList2.default);

exports.default = QueueentriesList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Queuestatus = function (_Representation) {
  _inherits(Queuestatus, _Representation);

  function Queuestatus(client, properties, parent) {
    _classCallCheck(this, Queuestatus);

    var _this = _possibleConstructorReturn(this, (Queuestatus.__proto__ || Object.getPrototypeOf(Queuestatus)).call(this, client, properties, parent));

    _this.type = 'queuestatus';

    return _this;
  }

  return Queuestatus;
}(_representation2.default);

exports.default = Queuestatus;
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

var QueuestatusList = function (_RepresentationList) {
  _inherits(QueuestatusList, _RepresentationList);

  function QueuestatusList(client, parent) {
    _classCallCheck(this, QueuestatusList);

    var _this = _possibleConstructorReturn(this, (QueuestatusList.__proto__ || Object.getPrototypeOf(QueuestatusList)).call(this, client, parent));

    _this.type = 'queuestatusList';
    _this.itemType = 'queuestatus';
    return _this;
  }

  return QueuestatusList;
}(_representationList2.default);

exports.default = QueuestatusList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recording = function (_Representation) {
  _inherits(Recording, _Representation);

  function Recording(client, properties, parent) {
    _classCallCheck(this, Recording);

    var _this = _possibleConstructorReturn(this, (Recording.__proto__ || Object.getPrototypeOf(Recording)).call(this, client, properties, parent));

    _this.type = 'recording';

    _this._unavailableMethods = ['save'];
    _this._unavailableMethods.forEach(function (method) {
      return delete _this[method];
    });

    return _this;
  }

  return Recording;
}(_representation2.default);

exports.default = Recording;
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

var RecordingList = function (_RepresentationList) {
  _inherits(RecordingList, _RepresentationList);

  function RecordingList(client, parent) {
    _classCallCheck(this, RecordingList);

    var _this = _possibleConstructorReturn(this, (RecordingList.__proto__ || Object.getPrototypeOf(RecordingList)).call(this, client, parent));

    _this.type = 'recordingList';
    _this.itemType = 'recording';
    return _this;
  }

  return RecordingList;
}(_representationList2.default);

exports.default = RecordingList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _deepExtend = require('deep-extend');

var _deepExtend2 = _interopRequireDefault(_deepExtend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Representation = function () {
  function Representation(client, properties, parent) {
    _classCallCheck(this, Representation);

    this.client = client;
    (0, _deepExtend2.default)(this, properties);
    this.parent = parent;
  }

  _createClass(Representation, [{
    key: 'save',
    value: function save(callback) {
      return this.client._saveRepresentation(this, callback);
    }
  }, {
    key: 'delete',
    value: function _delete(callback) {
      return this.client._deleteRepresentation(this, callback);
    }
  }]);

  return Representation;
}();

exports.default = Representation;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RepresentationList = function () {
  function RepresentationList(client, parent) {
    _classCallCheck(this, RepresentationList);

    this.client = client;
    this.parent = parent;
  }

  _createClass(RepresentationList, [{
    key: 'get',
    value: function get(id, params, callback) {
      return this.client._getResource(this.itemType, this, id, params, callback);
    }
  }, {
    key: 'create',
    value: function create() {
      var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


      // Make sure the type is correct, and it has no ID
      properties.id = undefined;
      properties.type = this.itemType;

      return this.client._objectFromItem(properties, this.parent);
    }
  }]);

  return RepresentationList;
}();

exports.default = RepresentationList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Routingrule = function (_Representation) {
  _inherits(Routingrule, _Representation);

  function Routingrule(client, properties, parent) {
    _classCallCheck(this, Routingrule);

    var _this = _possibleConstructorReturn(this, (Routingrule.__proto__ || Object.getPrototypeOf(Routingrule)).call(this, client, properties, parent));

    _this.type = 'routingrule';

    return _this;
  }

  return Routingrule;
}(_representation2.default);

exports.default = Routingrule;
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

var RoutingruleList = function (_RepresentationList) {
  _inherits(RoutingruleList, _RepresentationList);

  function RoutingruleList(client, parent) {
    _classCallCheck(this, RoutingruleList);

    var _this = _possibleConstructorReturn(this, (RoutingruleList.__proto__ || Object.getPrototypeOf(RoutingruleList)).call(this, client, parent));

    _this.type = 'routingruleList';
    _this.itemType = 'routingrule';
    return _this;
  }

  return RoutingruleList;
}(_representationList2.default);

exports.default = RoutingruleList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

var _sipregistrationList = require('./sipregistrationList');

var _sipregistrationList2 = _interopRequireDefault(_sipregistrationList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sipidentity = function (_Representation) {
  _inherits(Sipidentity, _Representation);

  function Sipidentity(client, properties, parent) {
    _classCallCheck(this, Sipidentity);

    var _this = _possibleConstructorReturn(this, (Sipidentity.__proto__ || Object.getPrototypeOf(Sipidentity)).call(this, client, properties, parent));

    _this.type = 'sipidentity';

    _this.registrations = new _sipregistrationList2.default(_this.client, _this);

    return _this;
  }

  return Sipidentity;
}(_representation2.default);

exports.default = Sipidentity;
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

var SipidentityList = function (_RepresentationList) {
  _inherits(SipidentityList, _RepresentationList);

  function SipidentityList(client, parent) {
    _classCallCheck(this, SipidentityList);

    var _this = _possibleConstructorReturn(this, (SipidentityList.__proto__ || Object.getPrototypeOf(SipidentityList)).call(this, client, parent));

    _this.type = 'sipidentityList';
    _this.itemType = 'sipidentity';
    return _this;
  }

  return SipidentityList;
}(_representationList2.default);

exports.default = SipidentityList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sipregistration = function (_Representation) {
  _inherits(Sipregistration, _Representation);

  function Sipregistration(client, properties, parent) {
    _classCallCheck(this, Sipregistration);

    var _this = _possibleConstructorReturn(this, (Sipregistration.__proto__ || Object.getPrototypeOf(Sipregistration)).call(this, client, properties, parent));

    _this.type = 'sipregistration';

    return _this;
  }

  return Sipregistration;
}(_representation2.default);

exports.default = Sipregistration;
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

var SipregistrationList = function (_RepresentationList) {
  _inherits(SipregistrationList, _RepresentationList);

  function SipregistrationList(client, parent) {
    _classCallCheck(this, SipregistrationList);

    var _this = _possibleConstructorReturn(this, (SipregistrationList.__proto__ || Object.getPrototypeOf(SipregistrationList)).call(this, client, parent));

    _this.type = 'sipregistrationList';
    _this.itemType = 'sipregistration';
    return _this;
  }

  return SipregistrationList;
}(_representationList2.default);

exports.default = SipregistrationList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Smsmessage = function (_Representation) {
  _inherits(Smsmessage, _Representation);

  function Smsmessage(client, properties, parent) {
    _classCallCheck(this, Smsmessage);

    var _this = _possibleConstructorReturn(this, (Smsmessage.__proto__ || Object.getPrototypeOf(Smsmessage)).call(this, client, properties, parent));

    _this.type = 'smsmessage';

    _this._unavailableMethods = ['delete'];
    _this._unavailableMethods.forEach(function (method) {
      return delete _this[method];
    });

    return _this;
  }

  return Smsmessage;
}(_representation2.default);

exports.default = Smsmessage;
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

var SmsmessageList = function (_RepresentationList) {
  _inherits(SmsmessageList, _RepresentationList);

  function SmsmessageList(client, parent) {
    _classCallCheck(this, SmsmessageList);

    var _this = _possibleConstructorReturn(this, (SmsmessageList.__proto__ || Object.getPrototypeOf(SmsmessageList)).call(this, client, parent));

    _this.type = 'smsmessageList';
    _this.itemType = 'smsmessage';
    return _this;
  }

  return SmsmessageList;
}(_representationList2.default);

exports.default = SmsmessageList;
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

var SoundList = function (_RepresentationList) {
  _inherits(SoundList, _RepresentationList);

  function SoundList(client, parent) {
    _classCallCheck(this, SoundList);

    var _this = _possibleConstructorReturn(this, (SoundList.__proto__ || Object.getPrototypeOf(SoundList)).call(this, client, parent));

    _this.type = 'soundList';
    _this.itemType = 'sound';
    return _this;
  }

  return SoundList;
}(_representationList2.default);

exports.default = SoundList;
'use strict';

// Module dependencies

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _atmosphere = require('atmosphere.js');

var _atmosphere2 = _interopRequireDefault(_atmosphere);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stream = function () {
  function Stream(client) {
    _classCallCheck(this, Stream);

    this.client = client;

    this.stream = {
      url: this.client.options.streamBase,
      contentType: 'application/json',
      logLevel: 'debug',
      headers: {
        'Authorization': this.client.authorization
      },
      dropHeaders: false,
      attachHeadersAsQueryString: false,
      maxReconnectOnClose: 0,
      enableXDR: true,
      transport: 'streaming'
    };

    this.stream.onOpen = function streamOpen() {

      console.log('Connected to stream');
    };

    this.stream.onError = function streamError(error) {

      console.log('Stream error: ' + error.reasonPhrase);
    };
  }

  _createClass(Stream, [{
    key: 'subscribe',
    value: function subscribe(type, callback) {

      this.stream.onMessage = function streamMessage(data) {

        var message = void 0;

        try {
          message = JSON.parse(data.responseBody);
        } catch (err) {

          // Ignore SyntaxErrors
          if ((err + '').substr(0, 11) !== 'SyntaxError') {
            console.log('Error parsing JSON: ' + err);
          }

          return;
        }

        if (Array.isArray(type) && type.indexOf(message.event) > -1 || typeof type === 'string' && message.event === type) {

          callback(message);
        }
      };

      _atmosphere2.default.subscribe(this.stream);
    }
  }]);

  return Stream;
}();

exports.default = Stream;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timeinterval = function (_Representation) {
  _inherits(Timeinterval, _Representation);

  function Timeinterval(client, properties, parent) {
    _classCallCheck(this, Timeinterval);

    var _this = _possibleConstructorReturn(this, (Timeinterval.__proto__ || Object.getPrototypeOf(Timeinterval)).call(this, client, properties, parent));

    _this.type = 'timeinterval';

    return _this;
  }

  return Timeinterval;
}(_representation2.default);

exports.default = Timeinterval;
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

var TimeintervalList = function (_RepresentationList) {
  _inherits(TimeintervalList, _RepresentationList);

  function TimeintervalList(client, parent) {
    _classCallCheck(this, TimeintervalList);

    var _this = _possibleConstructorReturn(this, (TimeintervalList.__proto__ || Object.getPrototypeOf(TimeintervalList)).call(this, client, parent));

    _this.type = 'timeintervalList';
    _this.itemType = 'timeinterval';
    return _this;
  }

  return TimeintervalList;
}(_representationList2.default);

exports.default = TimeintervalList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Virtual = function (_Representation) {
  _inherits(Virtual, _Representation);

  function Virtual(client, properties, parent) {
    _classCallCheck(this, Virtual);

    var _this = _possibleConstructorReturn(this, (Virtual.__proto__ || Object.getPrototypeOf(Virtual)).call(this, client, properties, parent));

    _this.type = 'virtual';

    return _this;
  }

  return Virtual;
}(_representation2.default);

exports.default = Virtual;
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

var VirtualList = function (_RepresentationList) {
  _inherits(VirtualList, _RepresentationList);

  function VirtualList(client, parent) {
    _classCallCheck(this, VirtualList);

    var _this = _possibleConstructorReturn(this, (VirtualList.__proto__ || Object.getPrototypeOf(VirtualList)).call(this, client, parent));

    _this.type = 'virtualList';
    _this.itemType = 'virtual';
    return _this;
  }

  return VirtualList;
}(_representationList2.default);

exports.default = VirtualList;
'use strict';

/*
  Thanks go to Brian Mancini for this polyfill of Q's 'nodeify' method
  http://derpturkey.com/promise-callback-pattern-for-javascript/
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
var nodeify = function replacePromiseWithCallback(callback) {

  if (callback) {

    this.then(function (value) {

      setTimeout(function () {
        callback(null, value);
      }, 0);
    }, function (error) {

      setTimeout(function () {
        callback(error);
      }, 0);
    });
  } else {

    return this;
  }
};

exports.default = nodeify;