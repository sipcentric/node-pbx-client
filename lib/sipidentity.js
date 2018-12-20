'use strict';

const Representation = require('./representation');
const SipregistrationList = require('./sipregistrationList');

class Sipidentity extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'sipidentity';

    this.registrations = new SipregistrationList(this.client, this);

  }

}

module.exports = Sipidentity;
