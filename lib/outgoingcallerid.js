'use strict';

const extend = require('deep-extend');

const Representation = require('./representation');

class Outgoingcallerid extends Representation {

  constructor(client, item, customerId) {

    super(client, customerId);

    extend(this, item);

    this.type = 'outgoingcallerid';

    this.unavailableMethods = ['save', 'delete'];
    this.unavailableMethods.forEach(method => this[method] = undefined);

  }

}

module.exports = Outgoingcallerid;
