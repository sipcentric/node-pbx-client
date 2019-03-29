const RepresentationList = require('./representationList');

class QueuemembershipList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'queuemembershipList';
    this.itemType = 'queuemembership';
  }
}

module.exports = QueuemembershipList;
