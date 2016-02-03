'use strict';

import Representation from './representation';
import EstimateList from './estimateList';
import InvoiceList from './invoiceList';
import PaymentmethodList from './paymentmethodList';

class Billingaccount extends Representation {

  constructor(client, properties, parent) {

    super(client, properties, parent);

    this.type = 'billingaccount';

    this.invoices = new InvoiceList(this.client, this);
    this.estimate = new EstimateList(this.client, this);
    this.paymentmethods = new PaymentmethodList(this.client, this);

  }

}

export default Billingaccount;
