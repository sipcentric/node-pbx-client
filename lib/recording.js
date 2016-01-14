'use strict';

const extend = require('deep-extend');

const Representation = require('./representation');

class Recording extends Representation {

  constructor(client, item, customerId) {

    super(client, customerId);

    extend(this, item);

    this.type = 'recording';

    this.unavailableMethods = ['save'];
    this.unavailableMethods.forEach(method => this[method] = undefined);

  }

}

module.exports = Recording;
