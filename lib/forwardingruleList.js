'use strict';

const RepresentationList = require('./representationList');

class ForwardingruleList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'forwardingruleList';
    this.itemType = 'forwardingrule';
  }

}

module.exports = ForwardingruleList;
