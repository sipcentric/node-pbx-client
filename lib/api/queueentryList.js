const RepresentationList = require('./representationList');

class QueueentryList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'queueentryList';
    this.itemType = 'queueentry';
  }
}

module.exports = QueueentryList;
