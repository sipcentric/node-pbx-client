'use strict';

const extend = require('deep-extend');

const Representation = require('./representation');

class Phonenumber extends Representation {

  constructor(client, item) {

    super(client);

    extend(this, item);

    this.type = 'phonenumber';

  }

}

module.exports = Phonenumber;
