'use strict';

const Representation = require('./representation');

class Smsmessage extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'smsmessage';

    this.unavailableMethods = ['save', 'delete'];
    this.unavailableMethods.forEach(method => this[method] = undefined);

  }

}

module.exports = Smsmessage;
