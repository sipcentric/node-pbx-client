'use strict';

const RepresentationList = require('./representationList');

class PhonebookentryList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'phonebookentryList';
    this.itemType = 'phonebookentry';
  }

}

module.exports = PhonebookentryList;
