'use strict';

const Representation = require('./representation');

class Mailbox extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'mailbox';

  }

}

module.exports = Mailbox;
