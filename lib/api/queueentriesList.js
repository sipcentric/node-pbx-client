const RepresentationList = require('./representationList');

class QueueentriesList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'queueentriesList';
    this.itemType = 'queueentries';
  }
}

module.exports = QueueentriesList;
