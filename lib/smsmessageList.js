'use strict';

const RepresentationList = require('./representationList');

class SmsmessageList extends RepresentationList {

  constructor(client) {
    super(client);
    this.type = 'smsmessageList';
    this.itemType = 'smsmessage';
  }

}

module.exports = SmsmessageList;
