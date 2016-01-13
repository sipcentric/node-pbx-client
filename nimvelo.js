'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = require('deep-extend');

var Representation = require('./representation');

var Call = (function (_Representation) {
  _inherits(Call, _Representation);

  function Call(client, item) {
    _classCallCheck(this, Call);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Call).call(this, client));

    extend(_this, item);

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

  function CallList(client) {
    _classCallCheck(this, CallList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CallList).call(this, client));

    _this.type = 'callList';
    _this.itemType = 'call';
    return _this;
  }

  return CallList;
})(RepresentationList);

module.exports = CallList;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = require('deep-extend');

var Representation = require('./representation');
var CallList = require('./callList');
var Call = require('./call');
var MusicList = require('./musicList');
var Music = require('./music');
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
var SoundList = require('./soundList');

var Customer = (function (_Representation) {
  _inherits(Customer, _Representation);

  function Customer(client, item) {
    _classCallCheck(this, Customer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Customer).call(this, client));

    extend(_this, item);

    _this.type = 'customer';

    _this.calls = new CallList(_this.client);
    _this.music = new MusicList(_this.client);
    _this.outgoingcallerids = new OutgoingcalleridList(_this.client);
    _this.phonebook = new PhonebookentryList(_this.client);
    _this.phonenumbers = new PhonenumberList(_this.client);
    _this.prompts = new PromptList(_this.client);
    _this.recordings = new RecordingList(_this.client);
    _this.smsmessages = new SmsmessageList(_this.client);
    _this.sounds = new SoundList(_this.client);

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
        case 'music':
          return new Music(this.client, properties);
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

var extend = require('deep-extend');

var Representation = require('./representation');

var Music = (function (_Representation) {
  _inherits(Music, _Representation);

  function Music(client, item) {
    _classCallCheck(this, Music);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Music).call(this, client));

    extend(_this, item);

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

  function MusicList(client) {
    _classCallCheck(this, MusicList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MusicList).call(this, client));

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
var Customer = require('./customer');
var CustomerList = require('./customerList');
var Music = require('./music');
var Outgoingcallerid = require('./outgoingcallerid');
var Phonebookentry = require('./phonebookentry');
var Phonenumber = require('./phonenumber');
var Prompt = require('./prompt');
var Stream = require('./stream');
var Recording = require('./recording');
var Smsmessage = require('./smsmessage');

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
    key: '_buildUrl',
    value: function _buildUrl(base, type, id) {

      // Build the url based on the base and the type

      var bases = {
        rest: this.options.restBase,
        stream: this.options.streamBase
      };

      // If we've been given a valid base, use it, else default to rest
      var baseUrl = bases.hasOwnProperty(base) ? bases[base] : bases.rest;
      var path = this._pathForType(type);

      if (type === 'customer' && !id) {
        if (!id) {
          // If there's no ID provided for a customer, use the default
          path = this.options.customer;
        }
      }

      // Let's build our URL
      var url = baseUrl;

      url += path ? path + '/' : '';
      url += id ? id + '/' : '';

      return url;
    }
  }, {
    key: '_pathForType',
    value: function _pathForType(type) {

      var path = '';
      var normalizedType = type.toLowerCase();

      switch (normalizedType) {
        case 'customers':
        case 'customer':
          // Use the default base REST URL
          break;
        case 'phonebookentry':
          path = this.options.customer + '/phonebook';
          break;
        case 'smsmessage':
          path = this.options.customer + '/sms';
          break;
        case 'sound':
        case 'prompt':
        case 'music':
          path = this.options.customer + '/sounds';
          break;
        case 'callbundle':
        case 'call':
        case 'creditstatus':
        case 'endpoint':
        case 'outgoingcallerid':
        case 'phonenumber':
        case 'recording':
        case 'timeinterval':
          path = this.options.customer + '/' + normalizedType + 's';
          break;
        default:
          path = this.options.customer + '/' + normalizedType + 's';
          break;
      }

      return path;
    }
  }, {
    key: '_objectFromItem',
    value: function _objectFromItem(item) {

      if (typeof item === 'undefined' || !item.hasOwnProperty('type')) {
        return false;
      }

      var object = undefined;

      // Figure out which class to use for this type

      switch (item.type) {
        /* eslint no-use-before-define: 0 */
        case 'call':
          object = new Call(this, item);
          break;
        case 'customer':
          object = new Customer(this, item);
          break;
        case 'did':
          object = new Phonenumber(this, item);
          break;
        case 'music':
          object = new Music(this, item);
          break;
        case 'outgoingcallerid':
          object = new Outgoingcallerid(this, item);
          break;
        case 'phonebookentry':
          object = new Phonebookentry(this, item);
          break;
        case 'prompt':
          object = new Prompt(this, item);
          break;
        case 'recording':
          object = new Recording(this, item);
          break;
        case 'smsmessage':
          object = new Smsmessage(this, item);
          break;
        default:
          break;
      }

      return object;
    }
  }, {
    key: '_buildObjects',
    value: function _buildObjects(items) {
      var _this = this;

      // Builds an array of class objects from a given array of items,
      // or returns a single class object if we only give it one object

      return Array.isArray(items) ? items.map(function (item) {
        return _this._objectFromItem(item);
      }) : this._objectFromItem(items);
    }
  }, {
    key: '_request',
    value: function _request(method, resource) {
      var _this2 = this;

      var id = undefined;
      var params = undefined;
      var callback = undefined;

      var base = 'rest';
      var options = undefined;

      var normalizedMethod = method.toLowerCase();

      // Iterate through the given arguments assigning them accordingly
      // The ID is a string or a number
      // The object is the params
      // The function is the callback

      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      if (Array.isArray(args)) {

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
      }

      // Build the options to pass to our custom request object

      if (normalizedMethod === 'get') {

        options = {
          method: 'get',
          url: this._buildUrl(base, resource, id), // Generate url
          qs: params
        };
      } else if (normalizedMethod === 'put') {

        // If we're PUTting, the params become the body

        options = {
          method: 'put',
          url: this._buildUrl(base, resource, id), // Generate url
          json: params
        };
      } else if (normalizedMethod === 'post') {

        // If we're POSTting, the params become the body

        options = {
          method: 'post',
          url: this._buildUrl(base, resource), // Generate url
          json: params
        };
      } else if (normalizedMethod === 'delete') {

        options = {
          method: 'delete',
          url: this._buildUrl(base, resource, id) // Generate url
        };
      }

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
    key: '_getResource',
    value: function _getResource(type) {
      var _this3 = this;

      var id = undefined;
      var params = undefined;
      var callback = undefined;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      if (Array.isArray(args)) {

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
      }

      return new Promise(function (resolve, reject) {

        _this3._request('get', type, id, params).then(function (data) {

          if (data.hasOwnProperty('items')) {

            var items = _this3._buildObjects(data.items);

            delete data.items;

            var meta = data;

            resolve({ meta: meta, items: items });
          } else {

            resolve(_this3._buildObjects(data));
          }
        }, function (error) {

          reject(error);
        });
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

var extend = require('deep-extend');

var Representation = require('./representation');

var Outgoingcallerid = (function (_Representation) {
  _inherits(Outgoingcallerid, _Representation);

  function Outgoingcallerid(client, item) {
    _classCallCheck(this, Outgoingcallerid);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Outgoingcallerid).call(this, client));

    extend(_this, item);

    _this.type = 'outgoingcallerid';

    _this.unavailableMethods = ['save', 'delete'];
    _this.unavailableMethods.forEach(function (method) {
      return _this[method] = undefined;
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

  function OutgoingcalleridList(client) {
    _classCallCheck(this, OutgoingcalleridList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OutgoingcalleridList).call(this, client));

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

var extend = require('deep-extend');

var Representation = require('./representation');

var Phonebookentry = (function (_Representation) {
  _inherits(Phonebookentry, _Representation);

  function Phonebookentry(client, item) {
    _classCallCheck(this, Phonebookentry);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Phonebookentry).call(this, client));

    extend(_this, item);

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

  function PhonebookentryList(client) {
    _classCallCheck(this, PhonebookentryList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PhonebookentryList).call(this, client));

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

var extend = require('deep-extend');

var Representation = require('./representation');

var Phonenumber = (function (_Representation) {
  _inherits(Phonenumber, _Representation);

  function Phonenumber(client, item) {
    _classCallCheck(this, Phonenumber);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Phonenumber).call(this, client));

    extend(_this, item);

    _this.type = 'phonenumber';

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

  function PhonenumberList(client) {
    _classCallCheck(this, PhonenumberList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PhonenumberList).call(this, client));

    _this.type = 'phonenumberList';
    _this.itemType = 'phonenumber';
    return _this;
  }

  return PhonenumberList;
})(RepresentationList);

module.exports = PhonenumberList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = require('deep-extend');

var Representation = require('./representation');

var Prompt = (function (_Representation) {
  _inherits(Prompt, _Representation);

  function Prompt(client, item) {
    _classCallCheck(this, Prompt);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Prompt).call(this, client));

    extend(_this, item);

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

  function PromptList(client) {
    _classCallCheck(this, PromptList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PromptList).call(this, client));

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

var extend = require('deep-extend');

var Representation = require('./representation');

var Recording = (function (_Representation) {
  _inherits(Recording, _Representation);

  function Recording(client, item) {
    _classCallCheck(this, Recording);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Recording).call(this, client));

    extend(_this, item);

    _this.type = 'recording';

    _this.unavailableMethods = ['save'];
    _this.unavailableMethods.forEach(function (method) {
      return _this[method] = undefined;
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

  function RecordingList(client) {
    _classCallCheck(this, RecordingList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RecordingList).call(this, client));

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
  function Representation(client) {
    _classCallCheck(this, Representation);

    this.client = client;
  }

  _createClass(Representation, [{
    key: 'save',
    value: function save(callback) {
      var _this = this;

      if (this.id) {

        return new Promise(function (resolve, reject) {

          _this.client._request('put', _this.type, _this.id, _this).then(function (data) {

            // Update our object with the newly returned propreties
            extend(_this, data);

            resolve(data);
          }, function (error) {

            reject(error);
          });
        }).nodeify(callback);
      } else {

        return new Promise(function (resolve, reject) {

          _this.client._request('post', _this.type, _this).then(function (data) {

            // Update our object with the newly returned propreties
            extend(_this, data);

            resolve(data);
          }, function (error) {

            reject(error);
          });
        }).nodeify(callback);
      }
    }
  }, {
    key: 'delete',
    value: function _delete(callback) {
      var _this2 = this;

      var type = this.type;

      return new Promise(function (resolve, reject) {

        _this2.client._request('delete', type, _this2.id).then(function () {

          resolve();
        }, function (error) {

          reject(error);
        });
      }).nodeify(callback);
    }
  }]);

  return Representation;
})();

module.exports = Representation;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RepresentationList = (function () {
  function RepresentationList(client) {
    _classCallCheck(this, RepresentationList);

    this.client = client;
  }

  _createClass(RepresentationList, [{
    key: 'list',
    value: function list(params, callback) {
      return this.client._getResource(this.itemType, params, callback);
    }
  }, {
    key: 'find',
    value: function find(id, params, callback) {
      return this.client._getResource(this.itemType, id, params, callback);
    }
  }, {
    key: 'create',
    value: function create(properties) {

      if ((typeof properties === 'undefined' ? 'undefined' : _typeof(properties)) !== 'object') {
        /* eslint no-param-reassign:0 */
        properties = {};
      }

      // Make sure the type is correct, and it has no ID
      properties.id = undefined;
      properties.type = this.itemType;

      return this.client._objectFromItem(properties);
    }
  }]);

  return RepresentationList;
})();

module.exports = RepresentationList;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = require('deep-extend');

var Representation = require('./representation');

var Smsmessage = (function (_Representation) {
  _inherits(Smsmessage, _Representation);

  function Smsmessage(client, item) {
    _classCallCheck(this, Smsmessage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Smsmessage).call(this, client));

    extend(_this, item);

    _this.type = 'smsmessage';

    _this.unavailableMethods = ['save', 'delete'];
    _this.unavailableMethods.forEach(function (method) {
      return _this[method] = undefined;
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

  function SmsmessageList(client) {
    _classCallCheck(this, SmsmessageList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SmsmessageList).call(this, client));

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

  function SoundList(client) {
    _classCallCheck(this, SoundList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SoundList).call(this, client));

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