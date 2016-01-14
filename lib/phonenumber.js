'use strict';

const extend = require('deep-extend');

const Representation = require('./representation');

class Phonenumber extends Representation {

  constructor(client, item, customerId) {

    super(client, customerId);

    extend(this, item);

    this.type = 'phonenumber';

  }

}

module.exports = Phonenumber;
