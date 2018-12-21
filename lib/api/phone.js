const Representation = require('./representation');
const ForwardingruleList = require('./forwardingruleList');
const SipidentityList = require('./sipidentityList');

class Phone extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'phone';

    this.sip = new SipidentityList(this.client, this);
    this.forwardingrules = new ForwardingruleList(this.client, this);
  }
}

module.exports = Phone;
