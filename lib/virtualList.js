'use strict';

const RepresentationList = require('./representationList');

class VirtualList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'virtualList';
    this.itemType = 'virtual';
  }

}

module.exports = VirtualList;
