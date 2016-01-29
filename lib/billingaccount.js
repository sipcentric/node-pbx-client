'use strict';

const Representation = require('./representation');

class Billingaccount extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'billingaccount';

  }

}

module.exports = Billingaccount;
