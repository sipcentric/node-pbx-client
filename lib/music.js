'use strict';

const extend = require('deep-extend');

const Representation = require('./representation');

class Music extends Representation {

  constructor(client, item, customerId) {

    super(client, customerId);

    extend(this, item);

    this.type = 'music';

  }

}

module.exports = Music;
