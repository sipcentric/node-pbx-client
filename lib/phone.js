'use strict';

const Representation = require('./representation');

class Phone extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'phone';

  }

}

module.exports = Phone;
