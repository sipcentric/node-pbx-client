const RepresentationList = require('./representationList');

class QueuemembershipsList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'queuemembershipsList';
    this.itemType = 'queuememberships';
  }
}

module.exports = QueuemembershipsList;
