'use strict';

const Representation = require('./representation');

class Recording extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'recording';

    this._unavailableMethods = ['save'];
    this._unavailableMethods.forEach(method => delete this[method]);

  }

}

module.exports = Recording;
