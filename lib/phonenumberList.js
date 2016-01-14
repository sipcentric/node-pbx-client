'use strict';

const RepresentationList = require('./representationList');

class PhonenumberList extends RepresentationList {

  constructor(client, customerId) {
    super(client, customerId);
    this.type = 'phonenumberList';
    this.itemType = 'phonenumber';
  }

}

module.exports = PhonenumberList;
