const Representation = require('./representation');
const EstimateList = require('./estimateList');
const InvoiceList = require('./invoiceList');
const PaymentmethodList = require('./paymentmethodList');

class Billingaccount extends Representation {
  constructor(client, properties, parent) {
    super(client, properties, parent);

    this.type = 'billingaccount';

    this.invoices = new InvoiceList(this.client, this);
    this.estimate = new EstimateList(this.client, this);
    this.paymentmethods = new PaymentmethodList(this.client, this);
  }
}

module.exports = Billingaccount;
