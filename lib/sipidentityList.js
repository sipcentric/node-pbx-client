'use strict';

const RepresentationList = require('./representationList');

class SipidentityList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'sipidentityList';
    this.itemType = 'sipidentity';
  }

}

module.exports = SipidentityList;
