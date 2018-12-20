'use strict';

const Representation = require('./representation');

class Forwardingrule extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'forwardingrule';

  }

}

module.exports = Forwardingrule;
