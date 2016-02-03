'use strict';

import RepresentationList from './representationList';

class QueueentriesList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'queueentriesList';
    this.itemType = 'queueentries';
  }

}

export default QueueentriesList;
