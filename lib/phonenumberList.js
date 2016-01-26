'use strict';

const RepresentationList = require('./representationList');

class PhonenumberList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'phonenumberList';
    this.itemType = 'phonenumber';

    this._unavailableMethods = ['create'];
    this._unavailableMethods.forEach(method => delete this[method]);

  }

}

module.exports = PhonenumberList;
