'use strict';

const Representation = require('./representation');

class Outgoingcallerid extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'outgoingcallerid';

    this._unavailableMethods = ['save', 'delete'];
    this._unavailableMethods.forEach(method => delete this[method]);

  }

}

module.exports = Outgoingcallerid;
