import Representation from './representation';
import { RepresentationBase } from '../interfaces';
import {
  APIBilling,
  APIBillingEstimate,
  APIBillingInvoice,
  APIBillingPaymentMethod,
} from '../interfaces/billing';
import RepresentationList from './representationList';
import Sipcentric from '.';

class BillingRepresentation extends Representation<APIBilling> {
  invoices: RepresentationList<APIBillingInvoice>;
  estimate: RepresentationList<APIBillingEstimate>;
  // TODO this list type used to be 'paymentmethod'
  paymentmethods: RepresentationList<APIBillingPaymentMethod>;

  constructor(
    client: Sipcentric,
    properties: APIBilling,
    parent: RepresentationBase | string,
  ) {
    super(client, 'billingaccount', properties, parent);

    this.invoices = new RepresentationList<APIBillingInvoice>(
      this.client,
      'invoice',
      this,
    );
    this.estimate = new RepresentationList<APIBillingEstimate>(
      this.client,
      'estimate',
      this,
    );
    // TODO
    this.paymentmethods = new RepresentationList<APIBillingPaymentMethod>(
      this.client,
      'worldpay',
      this,
    );
  }
}

export default BillingRepresentation;
