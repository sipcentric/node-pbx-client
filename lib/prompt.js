'use strict';

const extend = require('deep-extend');

const Representation = require('./representation');

class Prompt extends Representation {

  constructor(client, item) {

    super(client);

    extend(this, item);

    this.type = 'prompt';
    this.badger = 'badgsfdsfdsf';

  }

}

module.exports = Prompt;
