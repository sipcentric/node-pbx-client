'use strict';

// Module dependencies
const extend = require('deep-extend');

// Class dependencies
const Customer = require('./customer');

class Phonebookentry extends Customer {

  constructor(options, customer, item) {

    super(options, customer.data.customer);

    this.data = this.data || {};
    this.data.phonebookentry = this.data.phonebookentry || {};

    this.type = 'phonebookentry';
    this.data.phonebookentry.type = 'phonebookentry';

    extend(this.data.phonebookentry, item);

  }

}

module.exports = Phonebookentry;
