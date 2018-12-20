'use strict';

const Representation = require('./representation');

class Prompt extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'prompt';

  }

}

module.exports = Prompt;
