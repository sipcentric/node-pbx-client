import Representation from './representation';
import EstimateList from './estimateList';
import InvoiceList from './invoiceList';
import PaymentmethodList from './paymentmethodList';

class Billingaccount extends Representation {
  invoices: InvoiceList;
  estimate: EstimateList;
  paymentmethods: PaymentmethodList;

  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'billingaccount';

    this.invoices = new InvoiceList(this.client, this);
    this.estimate = new EstimateList(this.client, this);
    this.paymentmethods = new PaymentmethodList(this.client, this);
  }
}

export default Billingaccount;
