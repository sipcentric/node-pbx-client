'use strict';

const Representation = require('./representation');
const SipidentityList = require('./sipidentityList');

class Phone extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'phone';

    this.sip = new SipidentityList(this.client, this);

  }

}

module.exports = Phone;
