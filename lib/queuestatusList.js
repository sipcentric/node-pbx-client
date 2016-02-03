'use strict';

import RepresentationList from './representationList';

class QueuestatusList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'queuestatusList';
    this.itemType = 'queuestatus';
  }

}

export default QueuestatusList;
