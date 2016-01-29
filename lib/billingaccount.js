'use strict';

const Representation = require('./representation');
const EstimateList = require('./estimateList');
const InvoiceList = require('./invoiceList');

class Billingaccount extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'billingaccount';

    this.invoices = new InvoiceList(this.client, this);
    this.estimate = new EstimateList(this.client, this);

  }

}

module.exports = Billingaccount;
