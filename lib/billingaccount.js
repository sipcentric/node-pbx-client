'use strict';

const Representation = require('./representation');
const InvoiceList = require('./invoiceList');

class Billingaccount extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'billingaccount';

    this.invoices = new InvoiceList(this.client, this);

  }

}

module.exports = Billingaccount;
