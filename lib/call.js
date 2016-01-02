'use strict';

const extend = require('deep-extend');

const Representation = require('./representation');

class Call extends Representation {

  constructor(client, item) {

    super(client);

    extend(this, item);

    this.type = 'call';

  }

}

module.exports = Call;
