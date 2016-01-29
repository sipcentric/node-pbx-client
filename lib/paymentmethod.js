'use strict';

const Representation = require('./representation');

class Paymentmethod extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'paymentmethod';

  }

}

module.exports = Paymentmethod;
