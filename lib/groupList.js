'use strict';

const RepresentationList = require('./representationList');

class GroupList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'groupList';
    this.itemType = 'group';
  }

}

module.exports = GroupList;
