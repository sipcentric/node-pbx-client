'use strict';

const RepresentationList = require('./representationList');

class SipregistrationList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'sipregistrationList';
    this.itemType = 'sipregistration';
  }

}

module.exports = SipregistrationList;
