'use strict';

const RepresentationList = require('./representationList');

class SmsmessageList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'smsmessageList';
    this.itemType = 'smsmessage';
  }

}

module.exports = SmsmessageList;
