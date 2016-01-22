'use strict';

const Representation = require('./representation');

class Recording extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'recording';

    this.unavailableMethods = ['save'];
    this.unavailableMethods.forEach(method => this[method] = undefined);

  }

}

module.exports = Recording;
