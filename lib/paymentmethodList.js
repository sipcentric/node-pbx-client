'use strict';

const RepresentationList = require('./representationList');

class Paymentmethod extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'paymentmethodList';
    this.itemType = 'paymentmethod';
  }

}

module.exports = Paymentmethod;
