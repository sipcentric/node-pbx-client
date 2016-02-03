'use strict';

import RepresentationList from './representationList';

class VirtualList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'virtualList';
    this.itemType = 'virtual';
  }

}

export default VirtualList;
