'use strict';

const Representation = require('./representation');

class Call extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'call';

  }

}

module.exports = Call;
