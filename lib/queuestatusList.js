'use strict';

const RepresentationList = require('./representationList');

class QueuestatusList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'queuestatusList';
    this.itemType = 'queuestatus';
  }

}

module.exports = QueuestatusList;
