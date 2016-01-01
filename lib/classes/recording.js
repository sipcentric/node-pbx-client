'use strict';

// Module dependencies
const extend = require('deep-extend');

// Class dependencies
const Customer = require('./customer');

class Recording extends Customer {

  constructor(options, customer, item) {

    super(options, customer.data.customer);

    this.data = this.data || {};
    this.data.recording = this.data.recording || {};

    this.type = 'recording';
    this.data.recording.type = 'recording';

    extend(this.data.recording, item);

  }

}

module.exports = Recording;
