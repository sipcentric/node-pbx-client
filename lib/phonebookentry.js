'use strict';

const extend = require('deep-extend');

const Representation = require('./representation');

class Phonebookentry extends Representation {

  constructor(client, item, customerId) {

    super(client, customerId);

    extend(this, item);

    this.type = 'phonebookentry';

  }

}

module.exports = Phonebookentry;
