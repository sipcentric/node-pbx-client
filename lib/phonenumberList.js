'use strict';

const RepresentationList = require('./representationList');

class PhonenumberList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'phonenumberList';
    this.itemType = 'phonenumber';

    this.unavailableMethods = ['create'];
    this.unavailableMethods.forEach(method => this[method] = undefined);

  }

}

module.exports = PhonenumberList;
