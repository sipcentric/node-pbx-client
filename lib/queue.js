'use strict';

const Representation = require('./representation');

class Queue extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'queue';

  }

}

module.exports = Queue;
