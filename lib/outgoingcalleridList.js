'use strict';

const RepresentationList = require('./representationList');

class OutgoingcalleridList extends RepresentationList {

  constructor(client) {
    super(client);
    this.type = 'outgoingcalleridList';
    this.itemType = 'outgoingcallerid';
  }

}

module.exports = OutgoingcalleridList;
