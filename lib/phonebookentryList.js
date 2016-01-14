'use strict';

const RepresentationList = require('./representationList');

class PhonebookentryList extends RepresentationList {

  constructor(client, customerId) {
    super(client, customerId);
    this.type = 'phonebookentryList';
    this.itemType = 'phonebookentry';
  }

}

module.exports = PhonebookentryList;
