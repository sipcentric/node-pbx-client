'use strict';

const Representation = require('./representation');

class Queueentries extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'queueentries';

  }

}

module.exports = Queueentries;
