'use strict';

const Representation = require('./representation');

class Timeinterval extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'timeinterval';

  }

}

module.exports = Timeinterval;
