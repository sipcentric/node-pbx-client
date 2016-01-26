'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Call = (function (_Representation) {
  _inherits(Call, _Representation);

  function Call(client, properties, parent) {
    _classCallCheck(this, Call);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Call).call(this, client, properties, parent));

    _this.type = 'call';

    return _this;
  }

  return Call;
})(Representation);

module.exports = Call;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var CallList = (function (_RepresentationList) {
  _inherits(CallList, _RepresentationList);

  function CallList(client, parent) {
    _classCallCheck(this, CallList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CallList).call(this, client, parent));

    _this.type = 'callList';
    _this.itemType = 'call';
    return _this;
  }

  return CallList;
})(RepresentationList);

module.exports = CallList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Callbundle = (function (_Representation) {
  _inherits(Callbundle, _Representation);

  function Callbundle(client, properties, parent) {
    _classCallCheck(this, Callbundle);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Callbundle).call(this, client, properties, parent));

    _this.type = 'callbundle';

    return _this;
  }

  return Callbundle;
})(Representation);

module.exports = Callbundle;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var CallBundleList = (function (_RepresentationList) {
  _inherits(CallBundleList, _RepresentationList);

  function CallBundleList(client, parent) {
    _classCallCheck(this, CallBundleList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CallBundleList).call(this, client, parent));

    _this.type = 'callBundleList';
    _this.itemType = 'callBundle';
    return _this;
  }

  return CallBundleList;
})(RepresentationList);

module.exports = CallBundleList;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = require('deep-extend');

var Representation = require('./representation');
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
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var CustomerList = (function (_RepresentationList) {
  _inherits(CustomerList, _RepresentationList);

  function CustomerList(client) {
    _classCallCheck(this, CustomerList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CustomerList).call(this, client));

    _this.type = 'customerList';
    _this.itemType = 'customer';
    return _this;
  }

  return CustomerList;
})(RepresentationList);

module.exports = CustomerList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var EndpointList = (function (_RepresentationList) {
  _inherits(EndpointList, _RepresentationList);

  function EndpointList(client, parent) {
    _classCallCheck(this, EndpointList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EndpointList).call(this, client, parent));

    _this.type = 'endpointList';
    _this.itemType = 'endpoint';
    return _this;
  }

  return EndpointList;
})(RepresentationList);

module.exports = EndpointList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Group = (function (_Representation) {
  _inherits(Group, _Representation);

  function Group(client, properties, parent) {
    _classCallCheck(this, Group);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Group).call(this, client, properties, parent));

    _this.type = 'group';

    return _this;
  }

  return Group;
})(Representation);

module.exports = Group;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var GroupList = (function (_RepresentationList) {
  _inherits(GroupList, _RepresentationList);

  function GroupList(client, parent) {
    _classCallCheck(this, GroupList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GroupList).call(this, client, parent));

    _this.type = 'groupList';
    _this.itemType = 'group';
    return _this;
  }

  return GroupList;
})(RepresentationList);

module.exports = GroupList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Ivr = (function (_Representation) {
  _inherits(Ivr, _Representation);

  function Ivr(client, properties, parent) {
    _classCallCheck(this, Ivr);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Ivr).call(this, client, properties, parent));

    _this.type = 'ivr';

    return _this;
  }

  return Ivr;
})(Representation);

module.exports = Ivr;
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
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Mailbox = (function (_Representation) {
  _inherits(Mailbox, _Representation);

  function Mailbox(client, properties, parent) {
    _classCallCheck(this, Mailbox);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Mailbox).call(this, client, properties, parent));

    _this.type = 'mailbox';

    return _this;
  }

  return Mailbox;
})(Representation);

module.exports = Mailbox;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var MailboxList = (function (_RepresentationList) {
  _inherits(MailboxList, _RepresentationList);

  function MailboxList(client, parent) {
    _classCallCheck(this, MailboxList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MailboxList).call(this, client, parent));

    _this.type = 'mailboxList';
    _this.itemType = 'mailbox';
    return _this;
  }

  return MailboxList;
})(RepresentationList);

module.exports = MailboxList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Music = (function (_Representation) {
  _inherits(Music, _Representation);

  function Music(client, properties, parent) {
    _classCallCheck(this, Music);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Music).call(this, client, properties, parent));

    _this.type = 'music';

    return _this;
  }

  return Music;
})(Representation);

module.exports = Music;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var MusicList = (function (_RepresentationList) {
  _inherits(MusicList, _RepresentationList);

  function MusicList(client, parent) {
    _classCallCheck(this, MusicList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MusicList).call(this, client, parent));

    _this.type = 'musicList';
    _this.itemType = 'music';
    return _this;
  }

  return MusicList;
})(RepresentationList);

module.exports = MusicList;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = require('request');
var extend = require('deep-extend');

var Call = require('./call');
var Callbundle = require('./callbundle');
var Customer = require('./customer');
var CustomerList = require('./customerList');
var Group = require('./group');
var Ivr = require('./ivr');
var Mailbox = require('./mailbox');
var Music = require('./music');
var Outgoingcallerid = require('./outgoingcallerid');
var Phone = require('./phone');
var Phonebookentry = require('./phonebookentry');
var Phonenumber = require('./phonenumber');
var Prompt = require('./prompt');
var Queue = require('./queue');
var Stream = require('./stream');
var Recording = require('./recording');
var Routingrule = require('./routingrule');
var Smsmessage = require('./smsmessage');
var Timeinterval = require('./timeinterval');
var Virtual = require('./virtual');

var Representation = require('./representation');
var RepresentationList = require('./representationList');

// Promise + callback polyfill
Promise.prototype.nodeify = require('./polyfills/nodeify'); // eslint-disable-line no-extend-native

// Package version
var VERSION = require('../package.json').version;

var Nimvelo = (function () {
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
    this.options = extend({
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
    this.request = request.defaults(extend(
    // Pass the client submitted request options
    this.options.requestOptions));

    this.customers = new CustomerList(this);
    this.stream = new Stream(this);
  }

  _createClass(Nimvelo, [{
    key: '_pathForType',
    value: function _pathForType(type, id) {

      var path = '';
      var normalizedType = type.toLowerCase();

      switch (normalizedType) {
        case 'customers':
          // Use the default base REST URL
          break;
        case 'customer':
          path = id || '';
          break;
        case 'phone':
        case 'virtual':
        case 'group':
        case 'queue':
        case 'ivr':
        case 'mailbox':
          path = id + '/endpoints';
          break;
        case 'phonebookentry':
          path = id + '/phonebook';
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

      var object = undefined;

      // Figure out which class to use for this type

      switch (item.type) {
        /* eslint no-use-before-define: 0 */
        case 'call':
          object = new Call(this, item, parent);
          break;
        case 'callbundle':
          object = new Callbundle(this, item, parent);
          break;
        case 'customer':
          object = new Customer(this, item);
          break;
        case 'did':
          object = new Phonenumber(this, item, parent);
          break;
        case 'group':
          object = new Group(this, item, parent);
          break;
        case 'ivr':
          object = new Ivr(this, item, parent);
          break;
        case 'mailbox':
          object = new Mailbox(this, item, parent);
          break;
        case 'music':
          object = new Music(this, item, parent);
          break;
        case 'outgoingcallerid':
          object = new Outgoingcallerid(this, item, parent);
          break;
        case 'phone':
          object = new Phone(this, item, parent);
          break;
        case 'phonebookentry':
          object = new Phonebookentry(this, item, parent);
          break;
        case 'prompt':
          object = new Prompt(this, item, parent);
          break;
        case 'queue':
          object = new Queue(this, item, parent);
          break;
        case 'recording':
          object = new Recording(this, item, parent);
          break;
        case 'routingrule':
          object = new Routingrule(this, item, parent);
          break;
        case 'smsmessage':
          object = new Smsmessage(this, item, parent);
          break;
        case 'timeinterval':
          object = new Timeinterval(this, item, parent);
          break;
        case 'virtual':
          object = new Virtual(this, item, parent);
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
          if (key.charAt(0) !== '_' && key !== 'client' && key !== 'parent' && !(property instanceof Representation) && !(property instanceof RepresentationList)) {

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

            var parsedData = undefined;

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

      var url = undefined;
      var id = undefined;
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

      extend(params, this._paramsForType(type));

      url = this._buildUrlSection(type, object);
      url += typeof id !== 'undefined' ? id + '/' : '';
      url += Object.keys(params).length > 0 ? this._paramsToQueryString(params) : '';

      return url;
    }
  }, {
    key: '_buildUrlSection',
    value: function _buildUrlSection(type, object) {
      var url = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

      /* eslint no-param-reassign:0 */

      var path = undefined;
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
    key: '_getResource',
    value: function _getResource(type, object) {
      var _this3 = this;

      var id = undefined;
      var params = undefined;
      var callback = undefined;

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

        _this3._request('get', url).then(function (data) {

          if (data.hasOwnProperty('items')) {

            var items = _this3._buildObjects(data.items, object.parent);

            delete data.items;

            var meta = data;

            resolve({ meta: meta, items: items });
          } else {

            resolve(_this3._buildObjects(data, object.parent));
          }
        }, function (error) {

          reject(error);
        });
      }).nodeify(callback);
    }
  }, {
    key: '_saveRepresentation',
    value: function _saveRepresentation(object, callback) {
      var _this4 = this;

      var url = this._buildUrl(object.type, object, object.id);
      var requestMethod = object.id ? 'put' : 'post';

      return new Promise(function (resolve, reject) {

        _this4._request(requestMethod, url, object).then(function (data) {

          // Update our object with the newly returned propreties
          extend(object, data);

          resolve(data);
        }, reject);
      }).nodeify(callback);
    }
  }, {
    key: '_deleteRepresentation',
    value: function _deleteRepresentation(object, callback) {
      var _this5 = this;

      var url = this._buildUrl(object.type, object, object.id);

      return new Promise(function (resolve, reject) {

        _this5._request('delete', url, object).then(resolve, reject);
      }).nodeify(callback);
    }
  }]);

  return Nimvelo;
})();

module.exports = Nimvelo;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Outgoingcallerid = (function (_Representation) {
  _inherits(Outgoingcallerid, _Representation);

  function Outgoingcallerid(client, properties, parent) {
    _classCallCheck(this, Outgoingcallerid);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Outgoingcallerid).call(this, client, properties, parent));

    _this.type = 'outgoingcallerid';

    _this._unavailableMethods = ['save', 'delete'];
    _this._unavailableMethods.forEach(function (method) {
      return delete _this[method];
    });

    return _this;
  }

  return Outgoingcallerid;
})(Representation);

module.exports = Outgoingcallerid;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var OutgoingcalleridList = (function (_RepresentationList) {
  _inherits(OutgoingcalleridList, _RepresentationList);

  function OutgoingcalleridList(client, parent) {
    _classCallCheck(this, OutgoingcalleridList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OutgoingcalleridList).call(this, client, parent));

    _this.type = 'outgoingcalleridList';
    _this.itemType = 'outgoingcallerid';
    return _this;
  }

  return OutgoingcalleridList;
})(RepresentationList);

module.exports = OutgoingcalleridList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Phone = (function (_Representation) {
  _inherits(Phone, _Representation);

  function Phone(client, properties, parent) {
    _classCallCheck(this, Phone);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Phone).call(this, client, properties, parent));

    _this.type = 'phone';

    return _this;
  }

  return Phone;
})(Representation);

module.exports = Phone;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var PhoneList = (function (_RepresentationList) {
  _inherits(PhoneList, _RepresentationList);

  function PhoneList(client, parent) {
    _classCallCheck(this, PhoneList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PhoneList).call(this, client, parent));

    _this.type = 'phoneList';
    _this.itemType = 'phone';
    return _this;
  }

  return PhoneList;
})(RepresentationList);

module.exports = PhoneList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Phonebookentry = (function (_Representation) {
  _inherits(Phonebookentry, _Representation);

  function Phonebookentry(client, properties, parent) {
    _classCallCheck(this, Phonebookentry);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Phonebookentry).call(this, client, properties, parent));

    _this.type = 'phonebookentry';

    return _this;
  }

  return Phonebookentry;
})(Representation);

module.exports = Phonebookentry;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var PhonebookentryList = (function (_RepresentationList) {
  _inherits(PhonebookentryList, _RepresentationList);

  function PhonebookentryList(client, parent) {
    _classCallCheck(this, PhonebookentryList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PhonebookentryList).call(this, client, parent));

    _this.type = 'phonebookentryList';
    _this.itemType = 'phonebookentry';
    return _this;
  }

  return PhonebookentryList;
})(RepresentationList);

module.exports = PhonebookentryList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');
var RoutingruleList = require('./routingruleList');

var Phonenumber = (function (_Representation) {
  _inherits(Phonenumber, _Representation);

  function Phonenumber(client, properties, parent) {
    _classCallCheck(this, Phonenumber);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Phonenumber).call(this, client, properties, parent));

    _this.type = 'phonenumber';

    _this.routingrules = new RoutingruleList(_this.client, _this);

    return _this;
  }

  return Phonenumber;
})(Representation);

module.exports = Phonenumber;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var PhonenumberList = (function (_RepresentationList) {
  _inherits(PhonenumberList, _RepresentationList);

  function PhonenumberList(client, parent) {
    _classCallCheck(this, PhonenumberList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PhonenumberList).call(this, client, parent));

    _this.type = 'phonenumberList';
    _this.itemType = 'phonenumber';

    _this._unavailableMethods = ['create'];
    _this._unavailableMethods.forEach(function (method) {
      return delete _this[method];
    });

    return _this;
  }

  return PhonenumberList;
})(RepresentationList);

module.exports = PhonenumberList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Prompt = (function (_Representation) {
  _inherits(Prompt, _Representation);

  function Prompt(client, properties, parent) {
    _classCallCheck(this, Prompt);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Prompt).call(this, client, properties, parent));

    _this.type = 'prompt';

    return _this;
  }

  return Prompt;
})(Representation);

module.exports = Prompt;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var PromptList = (function (_RepresentationList) {
  _inherits(PromptList, _RepresentationList);

  function PromptList(client, parent) {
    _classCallCheck(this, PromptList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PromptList).call(this, client, parent));

    _this.type = 'promptList';
    _this.itemType = 'prompt';
    return _this;
  }

  return PromptList;
})(RepresentationList);

module.exports = PromptList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Queue = (function (_Representation) {
  _inherits(Queue, _Representation);

  function Queue(client, properties, parent) {
    _classCallCheck(this, Queue);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Queue).call(this, client, properties, parent));

    _this.type = 'queue';

    return _this;
  }

  return Queue;
})(Representation);

module.exports = Queue;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var QueueList = (function (_RepresentationList) {
  _inherits(QueueList, _RepresentationList);

  function QueueList(client, parent) {
    _classCallCheck(this, QueueList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(QueueList).call(this, client, parent));

    _this.type = 'queueList';
    _this.itemType = 'queue';
    return _this;
  }

  return QueueList;
})(RepresentationList);

module.exports = QueueList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Recording = (function (_Representation) {
  _inherits(Recording, _Representation);

  function Recording(client, properties, parent) {
    _classCallCheck(this, Recording);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Recording).call(this, client, properties, parent));

    _this.type = 'recording';

    _this._unavailableMethods = ['save'];
    _this._unavailableMethods.forEach(function (method) {
      return delete _this[method];
    });

    return _this;
  }

  return Recording;
})(Representation);

module.exports = Recording;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var RecordingList = (function (_RepresentationList) {
  _inherits(RecordingList, _RepresentationList);

  function RecordingList(client, parent) {
    _classCallCheck(this, RecordingList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RecordingList).call(this, client, parent));

    _this.type = 'recordingList';
    _this.itemType = 'recording';
    return _this;
  }

  return RecordingList;
})(RepresentationList);

module.exports = RecordingList;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var extend = require('deep-extend');

var Representation = (function () {
  function Representation(client, properties, parent) {
    _classCallCheck(this, Representation);

    this.client = client;
    extend(this, properties);
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
})();

module.exports = Representation;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RepresentationList = (function () {
  function RepresentationList(client, parent) {
    _classCallCheck(this, RepresentationList);

    this.client = client;
    this.parent = parent;
  }

  _createClass(RepresentationList, [{
    key: 'list',
    value: function list(params, callback) {
      return this.client._getResource(this.itemType, this, params, callback);
    }
  }, {
    key: 'find',
    value: function find(id, params, callback) {
      return this.client._getResource(this.itemType, this, id, params, callback);
    }
  }, {
    key: 'create',
    value: function create() {
      var properties = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      // Make sure the type is correct, and it has no ID
      properties.id = undefined;
      properties.type = this.itemType;

      return this.client._objectFromItem(properties, this.parent);
    }
  }]);

  return RepresentationList;
})();

module.exports = RepresentationList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Routingrule = (function (_Representation) {
  _inherits(Routingrule, _Representation);

  function Routingrule(client, properties, parent) {
    _classCallCheck(this, Routingrule);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Routingrule).call(this, client, properties, parent));

    _this.type = 'routingrule';

    return _this;
  }

  return Routingrule;
})(Representation);

module.exports = Routingrule;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var RoutingruleList = (function (_RepresentationList) {
  _inherits(RoutingruleList, _RepresentationList);

  function RoutingruleList(client, parent) {
    _classCallCheck(this, RoutingruleList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RoutingruleList).call(this, client, parent));

    _this.type = 'routingruleList';
    _this.itemType = 'routingrule';
    return _this;
  }

  return RoutingruleList;
})(RepresentationList);

module.exports = RoutingruleList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Smsmessage = (function (_Representation) {
  _inherits(Smsmessage, _Representation);

  function Smsmessage(client, properties, parent) {
    _classCallCheck(this, Smsmessage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Smsmessage).call(this, client, properties, parent));

    _this.type = 'smsmessage';

    _this._unavailableMethods = ['save', 'delete'];
    _this._unavailableMethods.forEach(function (method) {
      return delete _this[method];
    });

    return _this;
  }

  return Smsmessage;
})(Representation);

module.exports = Smsmessage;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var SmsmessageList = (function (_RepresentationList) {
  _inherits(SmsmessageList, _RepresentationList);

  function SmsmessageList(client, parent) {
    _classCallCheck(this, SmsmessageList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SmsmessageList).call(this, client, parent));

    _this.type = 'smsmessageList';
    _this.itemType = 'smsmessage';
    return _this;
  }

  return SmsmessageList;
})(RepresentationList);

module.exports = SmsmessageList;
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
'use strict';

// Module dependencies

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var atmosphere = require('atmosphere.js');

var Stream = (function () {
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

        var message = undefined;

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

      atmosphere.subscribe(this.stream);
    }
  }]);

  return Stream;
})();

module.exports = Stream;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Timeinterval = (function (_Representation) {
  _inherits(Timeinterval, _Representation);

  function Timeinterval(client, properties, parent) {
    _classCallCheck(this, Timeinterval);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Timeinterval).call(this, client, properties, parent));

    _this.type = 'timeinterval';

    return _this;
  }

  return Timeinterval;
})(Representation);

module.exports = Timeinterval;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var TimeintervalList = (function (_RepresentationList) {
  _inherits(TimeintervalList, _RepresentationList);

  function TimeintervalList(client, parent) {
    _classCallCheck(this, TimeintervalList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TimeintervalList).call(this, client, parent));

    _this.type = 'timeintervalList';
    _this.itemType = 'timeinterval';
    return _this;
  }

  return TimeintervalList;
})(RepresentationList);

module.exports = TimeintervalList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');

var Virtual = (function (_Representation) {
  _inherits(Virtual, _Representation);

  function Virtual(client, properties, parent) {
    _classCallCheck(this, Virtual);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Virtual).call(this, client, properties, parent));

    _this.type = 'virtual';

    return _this;
  }

  return Virtual;
})(Representation);

module.exports = Virtual;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var VirtualList = (function (_RepresentationList) {
  _inherits(VirtualList, _RepresentationList);

  function VirtualList(client, parent) {
    _classCallCheck(this, VirtualList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VirtualList).call(this, client, parent));

    _this.type = 'virtualList';
    _this.itemType = 'virtual';
    return _this;
  }

  return VirtualList;
})(RepresentationList);

module.exports = VirtualList;
'use strict';

/*
  Thanks go to Brian Mancini for this polyfill of Q's 'nodeify' method
  http://derpturkey.com/promise-callback-pattern-for-javascript/
*/

module.exports = function replacePromiseWithCallback(callback) {

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