'use strict';

const RepresentationList = require('./representationList');

class CallList extends RepresentationList {

  constructor(client) {
    super(client);
    this.type = 'callList';
    this.itemType = 'call';
  }

}

module.exports = CallList;
