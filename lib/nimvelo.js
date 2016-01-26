'use strict';

const request = require('request');
const extend = require('deep-extend');

const Call = require('./call');
const Customer = require('./customer');
const CustomerList = require('./customerList');
const Group = require('./group');
const Ivr = require('./ivr');
const Mailbox = require('./mailbox');
const Music = require('./music');
const Outgoingcallerid = require('./outgoingcallerid');
const Phone = require('./phone');
const Phonebookentry = require('./phonebookentry');
const Phonenumber = require('./phonenumber');
const Prompt = require('./prompt');
const Queue = require('./queue');
const Stream = require('./stream');
const Recording = require('./recording');
const Routingrule = require('./routingrule');
const Smsmessage = require('./smsmessage');
const Virtual = require('./virtual');

const Representation = require('./representation');
const RepresentationList = require('./representationList');

// Promise + callback polyfill
Promise.prototype.nodeify = require('./polyfills/nodeify'); // eslint-disable-line no-extend-native

// Package version
const VERSION = require('../package.json').version;

class Nimvelo {

  constructor(options) {

    this.VERSION = VERSION;

    if (typeof options !== 'undefined') {

      if (options.hasOwnProperty('username') && options.hasOwnProperty('password')) {

        // If we've got the credentials then encode and format them
        const encodedAuth = new Buffer(options.username + ':' + options.password).toString('base64');

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
    this.request = request.defaults(
      extend(
        // Pass the client submitted request options
        this.options.requestOptions
      )
    );

    this.customers = new CustomerList(this);
    this.stream = new Stream(this);

  }


  _pathForType(type, id) {

    let path = '';
    const normalizedType = type.toLowerCase();

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
        path = `${id}/endpoints`;
        break;
      case 'phonebookentry':
        path = `${id}/phonebook`;
        break;
      case 'smsmessage':
        path = `${id}/sms`;
        break;
      case 'sound':
      case 'prompt':
      case 'music':
        path = `${id}/sounds`;
        break;
      default:
        path = `${id}/${normalizedType}s`;
        break;
    }

    return path;

  }


  _paramsForType(type) {

    const params = {};
    const normalizedType = type.toLowerCase();

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


  _objectFromItem(item, parent) {

    if (typeof item === 'undefined' || !item.hasOwnProperty('type')) {
      return item;
    }

    let object;

    // Figure out which class to use for this type

    switch (item.type) {
      /* eslint no-use-before-define: 0 */
      case 'call':
        object = new Call(this, item, parent);
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
      case 'virtual':
        object = new Virtual(this, item, parent);
        break;
      default:
        object = item;
        break;
    }

    return object;

  }


  _buildObjects(items, parent) {

    // Builds an array of class objects from a given array of items,
    // or returns a single class object if we only give it one object

    return Array.isArray(items) ? items.map(item => this._objectFromItem(item, parent)) : this._objectFromItem(items, parent);

  }


  _request(method, url, params, callback) {
    /* eslint no-param-reassign:0 */

    // Normalize method
    method = method.toLowerCase();

    if (typeof params === 'function') {
      callback = params;
      params = null;
    }

    const json = {};

    // Filter out properties which shouldn't be sent back to the server in
    // the json body. This won't affect query params
    for (const key in params) {

      if (params.hasOwnProperty(key)) {

        const property = params[key];
        if (key.charAt(0) !== '_' &&
          key !== 'client' &&
          key !== 'parent' &&
          !(property instanceof Representation) &&
          !(property instanceof RepresentationList)) {

          json[key] = property;
        }

      }

    }

    const options = {
      method,
      url,
      json
    };

    return new Promise((resolve, reject) => {

      // Make the request

      this.request(options, function makeRequest(error, response, data) {

        if (error) {

          // If there's an error, reject
          reject(error);

        } else {

          let parsedData;

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


  _buildUrl(type, object, ...args) {

    let url;
    let id;
    let params = {};

    args.forEach((arg) => {

      switch (typeof arg) {
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
    url += typeof id !== 'undefined' ? (id + '/') : '';
    url += Object.keys(params).length > 0 ? this._paramsToQueryString(params) : '';

    return url;

  }


  _buildUrlSection(type, object, url = '') {
    /* eslint no-param-reassign:0 */

    let path;
    const baseUrl = this.options.restBase;

    if (object.parent) {

      path = this._pathForType(type, object.parent.id);

      url = (path ? (path + '/') : '') + url;
      url = this._buildUrlSection(object.parent.type, object.parent, url);

    } else {

      path = this._pathForType(type);

      url = baseUrl + (path ? (path + '/') : '') + (url ? url : '');

    }

    return url;

  }


  _paramsToQueryString(params) {

    if (typeof params === 'object') {

      const string = Object.keys(params).reduce((prev, key, index) => {

        let startChar = '&';

        if (index === 0) {
          startChar = '?';
        }

        return `${prev}${startChar}${key}=${params[key]}`;

      }, '');

      return string;

    } else if (typeof params === 'string') {

      return params;

    } else {

      return '';

    }

  }


  _getResource(type, object, ...args) {

    let id;
    let params;
    let callback;

    args.forEach((arg) => {

      switch (typeof arg) {
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

    const url = this._buildUrl(type, object, id, params);

    return new Promise((resolve, reject) => {

      this._request('get', url).then(data => {

        if (data.hasOwnProperty('items')) {

          const items = this._buildObjects(data.items, object.parent);

          delete data.items;

          const meta = data;

          resolve({ meta, items });

        } else {

          resolve(this._buildObjects(data, object.parent));

        }

      }, error => {

        reject(error);

      });

    }).nodeify(callback);

  }


  _saveRepresentation(object, callback) {

    const url = this._buildUrl(object.type, object, object.id);
    const requestMethod = object.id ? 'put' : 'post';

    return new Promise((resolve, reject) => {

      this._request(requestMethod, url, object).then(data => {

        // Update our object with the newly returned propreties
        extend(object, data);

        resolve(data);

      }, reject);

    }).nodeify(callback);

  }


  _deleteRepresentation(object, callback) {

    const url = this._buildUrl(object.type, object, object.id);

    return new Promise((resolve, reject) => {

      this._request('delete', url, object).then(resolve, reject);

    }).nodeify(callback);

  }

}

module.exports = Nimvelo;
