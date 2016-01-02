'use strict';

const extend = require('deep-extend');

const Representation = require('./representation');

class Recording extends Representation {

  constructor(client, item) {

    super(client);

    extend(this, item);

    this.type = 'recording';

  }

}

module.exports = Recording;
