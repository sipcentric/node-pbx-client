'use strict';

const extend = require('deep-extend');

const Representation = require('./representation');

class Smsmessage extends Representation {

  constructor(client, item) {

    super(client);

    extend(this, item);

    this.type = 'smsmessage';

  }

}

module.exports = Smsmessage;
