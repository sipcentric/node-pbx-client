'use strict';

const RepresentationList = require('./representationList');

class PhonebookentryList extends RepresentationList {

  constructor(client) {
    super(client);
    this.type = 'phonebookentryList';
    this.itemType = 'phonebookentry';
  }

}

module.exports = PhonebookentryList;
