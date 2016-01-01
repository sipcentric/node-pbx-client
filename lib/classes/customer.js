'use strict';

// Module dependencies
const extend = require('deep-extend');

// Class dependencies
const Nimvelo = require('./nimvelo');
const Phonebookentry = require('./phonebookentry');
const Recording = require('./recording');

class Customer {

  constructor(options, item) {

    super(options);

    this.data = this.data || {};
    this.data.customer = this.data.customer || {};

    this.type = 'customer';
    this.data.customer.type = 'customer';

    extend(this.data.customer, item);

  }


  _resourceForType(type) {

    let resource;

    switch (type) {
      case 'customer':
        resource = 'customer';
        break;
      case 'phonebookentry':
        resource = 'phonebook';
        break;
      case 'recording':
        // Basic pluralization
        resource += 's';
        break;
      default:
        break;
    }

    return resource;

  }


  _getResource(type, id, callback) {

    if (typeof id === 'function') {
      /* eslint no-param-reassign:0 */

      // If we've not got an id then set it to null

      callback = id;
      id = null;

    }

    return this._request('get', type, id, (err, data, response) => {

      if (!callback) {
        return;
      }

      if (err) {
        callback(err, data, response);
        return;
      }

      callback(null, this._buildObjects(data.items || data), response);

    });

  }


  phonebook(id, callback) {

    this._getResource('phonebook', id, callback);

  }


  recordings(id, callback) {

    this._getResource('recordings', id, callback);

  }


  save(callback) {

    const type = this.type;
    const resource = this._resourceForType(type);

    const requestCallback = (err, data, response) => {

      if (!callback) {
        return;
      }

      if (err) {
        callback(err, data, response);
        return;
      }

      // Update our object with the newly returned propreties
      extend(this.data[type], data.items ? data.items : data);

      // Pass our newly updated object to the callback
      callback(null, this, response);

    };

    let builtRequest;

    if (this.data[type].id) {

      builtRequest = this._request('put', resource, this.data[type].id, this.data[type], requestCallback);

    } else {

      builtRequest = this._request('post', resource, this.data[type], requestCallback);

    }

    return builtRequest;

  }


  delete(callback) {

    const type = this.type;
    const resource = this._resourceForType(type);

    return this._request('delete', resource, this.data[type].id, function handleDeleteResponse(err, data, response) {

      if (!callback) {
        return;
      }

      if (err) {
        callback(err, response);
        return;
      }

      callback(null, response);

    });

  }


  create(type, properties) {

    let instance;

    // Figure out which class to use for this type

    switch (type) {
      case 'phonebookentry':
        instance = new Phonebookentry(this.options, this, properties);
        break;
      case 'recording':
        instance = new Recording(this.options, this, properties);
        break;
      default:
        break;
    }

    return instance;

  }


  update(properties) {

    const type = this.type;

    extend(this.data[type], properties);

    return this;

  }

}

module.exports = Customer;
