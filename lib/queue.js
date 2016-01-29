'use strict';

const Representation = require('./representation');
const QueuestatusList = require('./queuestatusList');

class Queue extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'queue';

    this.status = new QueuestatusList(this.client, this);

  }

}

module.exports = Queue;
