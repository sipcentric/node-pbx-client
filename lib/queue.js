const Representation = require('./representation');
const QueueentriesList = require('./queueentriesList');
const QueuestatusList = require('./queuestatusList');

class Queue extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'queue';

    this.entries = new QueueentriesList(this.client, this);
    this.status = new QueuestatusList(this.client, this);
  }
}

module.exports = Queue;
