const RepresentationList = require('./representationList');

class QueueList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'queueList';
    this.itemType = 'queue';
  }
}

module.exports = QueueList;
