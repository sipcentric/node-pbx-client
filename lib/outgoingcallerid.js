'use strict';

const Representation = require('./representation');

class Outgoingcallerid extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'outgoingcallerid';

    this.unavailableMethods = ['save', 'delete'];
    this.unavailableMethods.forEach(method => this[method] = undefined);

  }

}

module.exports = Outgoingcallerid;
