'use strict';

import RepresentationList from './representationList';

class InvoiceList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'invoiceList';
    this.itemType = 'invoice';
  }

}

export default InvoiceList;
