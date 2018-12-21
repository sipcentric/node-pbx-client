const RepresentationList = require('./representationList');

class PhoneList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'phoneList';
    this.itemType = 'phone';
  }
}

module.exports = PhoneList;
