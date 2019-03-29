const Representation = require('./representation');
const QueueentryList = require('./queueentryList');
const QueuemembershipList = require('./queuemembershipList');
const QueuestatusList = require('./queuestatusList');

class Queue extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'queue';

    this.entries = new QueueentryList(this.client, this);
    this.memberships = new QueuemembershipList(this.client, this);
    this.status = new QueuestatusList(this.client, this);
  }
}

module.exports = Queue;
