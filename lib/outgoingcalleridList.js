'use strict';

const RepresentationList = require('./representationList');

class OutgoingcalleridList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'outgoingcalleridList';
    this.itemType = 'outgoingcallerid';
  }

}

module.exports = OutgoingcalleridList;
