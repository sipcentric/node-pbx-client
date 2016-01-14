'use strict';

const extend = require('deep-extend');

const Representation = require('./representation');

class Prompt extends Representation {

  constructor(client, item, customerId) {

    super(client, customerId);

    extend(this, item);

    this.type = 'prompt';

  }

}

module.exports = Prompt;
