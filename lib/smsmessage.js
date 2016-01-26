'use strict';

const Representation = require('./representation');

class Smsmessage extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'smsmessage';

    this._unavailableMethods = ['save', 'delete'];
    this._unavailableMethods.forEach(method => delete this[method]);

  }

}

module.exports = Smsmessage;
