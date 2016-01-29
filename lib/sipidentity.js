'use strict';

const Representation = require('./representation');

class Sipidentity extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'sipidentity';

  }

}

module.exports = Sipidentity;
