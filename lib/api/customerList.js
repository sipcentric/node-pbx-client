const RepresentationList = require('./representationList');

class CustomerList extends RepresentationList {
  constructor(client) {
    super(client);
    this.type = 'customerList';
    this.itemType = 'customer';
  }
}

module.exports = CustomerList;
