'use strict';

const RepresentationList = require('./representationList');

class PhonenumberList extends RepresentationList {

  constructor(client) {
    super(client);
    this.type = 'phonenumberList';
    this.itemType = 'phonenumber';
  }

}

module.exports = PhonenumberList;
