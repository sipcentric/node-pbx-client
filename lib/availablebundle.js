'use strict';

const Representation = require('./representation');

class Availablebundle extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'availablebundle';

  }

}

module.exports = Availablebundle;
