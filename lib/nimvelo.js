'use strict';

const request = require('request');
const extend = require('deep-extend');

const Call = require('./call');
const Customer = require('./customer');
const CustomerList = require('./customerList');
const Outgoingcallerid = require('./outgoingcallerid');
const Phonebookentry = require('./phonebookentry');
const Phonenumber = require('./phonenumber');
const Prompt = require('./prompt');
const Stream = require('./stream');
const Recording = require('./recording');
const Smsmessage = require('./smsmessage');

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


  _buildUrl(base, type, id) {

    // Build the url based on the base and the type

    const bases = {
      rest: this.options.restBase,
      stream: this.options.streamBase
    };

    // If we've been given a valid base, use it, else default to rest
    const baseUrl = (bases.hasOwnProperty(base)) ? bases[base] : bases.rest;
    let path = this._pathForType(type);

    if (type === 'customer' && !id) {
      if (!id) {
        // If there's no ID provided for a customer, use the default
        path = this.options.customer;
      }
    }

    // Let's build our URL
    let url = baseUrl;

    url += path ? (path + '/') : '';
    url += id ? (id + '/') : '';

    return url;
  }


  _pathForType(type) {

    let path = '';
    const normalizedType = type.toLowerCase();

    switch (normalizedType) {
      case 'customers':
      case 'customer':
        // Use the default base REST URL
        break;
      case 'phonebookentry':
        path = `${this.options.customer}/phonebook`;
        break;
      case 'smsmessage':
        path = `${this.options.customer}/sms`;
        break;
      case 'prompt':
      case 'music':
        path = `${this.options.customer}/sounds`;
        break;
      case 'callbundle':
      case 'call':
      case 'creditstatus':
      case 'endpoint':
      case 'outgoingcallerid':
      case 'phonenumber':
      case 'recording':
      case 'sound':
      case 'timeinterval':
        path = `${this.options.customer}/${normalizedType}s`;
        break;
      default:
        path = `${this.options.customer}/${normalizedType}s`;
        break;
    }

    return path;

  }

  _objectFromItem(item) {

    if (typeof item === 'undefined' || !item.hasOwnProperty('type')) {
      return false;
    }

    let object;

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


  _buildObjects(items) {

    // Builds an array of class objects from a given array of items,
    // or returns a single class object if we only give it one object

    return Array.isArray(items) ? items.map(item => this._objectFromItem(item)) : this._objectFromItem(items);

  }


  _request(method, resource, ...args) {

    let id;
    let params;
    let callback;

    const base = 'rest';
    let options;

    const normalizedMethod = method.toLowerCase();

    // Iterate through the given arguments assigning them accordingly
    // The ID is a string or a number
    // The object is the params
    // The function is the callback

    if (Array.isArray(args)) {

      args.forEach(arg => {

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


  _getResource(type, ...args) {

    let id;
    let params;
    let callback;

    if (Array.isArray(args)) {

      args.forEach(arg => {

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

    }

    return new Promise((resolve, reject) => {

      this._request('get', type, id, params).then(data => {

        if (data.hasOwnProperty('items')) {

          const items = this._buildObjects(data.items);

          delete data.items;

          const meta = data;

          resolve({ meta, items });

        } else {

          resolve(this._buildObjects(data));

        }

      }, error => {

        reject(error);

      });

    }).nodeify(callback);

  }

}

module.exports = Nimvelo;
