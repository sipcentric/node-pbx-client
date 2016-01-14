'use strict';

const RepresentationList = require('./representationList');

class SmsmessageList extends RepresentationList {

  constructor(client, customerId) {
    super(client, customerId);
    this.type = 'smsmessageList';
    this.itemType = 'smsmessage';
  }

}

module.exports = SmsmessageList;
