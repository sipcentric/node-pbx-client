'use strict';

const RepresentationList = require('./representationList');

class InvoiceList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'invoiceList';
    this.itemType = 'invoice';
  }

}

module.exports = InvoiceList;
