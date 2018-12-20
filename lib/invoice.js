'use strict';

const Representation = require('./representation');

class Invoice extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'invoice';

  }

}

module.exports = Invoice;
