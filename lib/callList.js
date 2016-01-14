'use strict';

const RepresentationList = require('./representationList');

class CallList extends RepresentationList {

  constructor(client, customerId) {
    super(client, customerId);
    this.type = 'callList';
    this.itemType = 'call';
  }

}

module.exports = CallList;
