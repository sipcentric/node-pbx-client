const RepresentationList = require('./representationList');
const SipregistrationList = require('./sipregistrationList');

class SipidentityList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'sipidentityList';
    this.itemType = 'sipidentity';

    // A shortcut to get registrations without getting sipidentity first
    this.registrations = new SipregistrationList(this.client, this);
  }
}

module.exports = SipidentityList;
