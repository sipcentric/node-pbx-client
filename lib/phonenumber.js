'use strict';

const Representation = require('./representation');

class Phonenumber extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'phonenumber';

  }

}

module.exports = Phonenumber;
