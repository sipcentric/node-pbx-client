'use strict';

const extend = require('deep-extend');

const Representation = require('./representation');

class Music extends Representation {

  constructor(client, item) {

    super(client);

    extend(this, item);

    this.type = 'music';

  }

}

module.exports = Music;
