'use strict';

import RepresentationList from './representationList';

class QueueList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'queueList';
    this.itemType = 'queue';
  }

}

export default QueueList;
