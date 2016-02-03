'use strict';

import RepresentationList from './representationList';

class GroupList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'groupList';
    this.itemType = 'group';
  }

}

export default GroupList;
