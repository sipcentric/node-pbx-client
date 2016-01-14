'use strict';

const RepresentationList = require('./representationList');

class OutgoingcalleridList extends RepresentationList {

  constructor(client, customerId) {
    super(client, customerId);
    this.type = 'outgoingcalleridList';
    this.itemType = 'outgoingcallerid';
  }

}

module.exports = OutgoingcalleridList;
