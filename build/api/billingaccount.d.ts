import Representation from './representation';
import EstimateList from './estimateList';
import InvoiceList from './invoiceList';
import PaymentmethodList from './paymentmethodList';
import { RepresentationBase, NimveloClient, ApiItem } from '../interfaces';
declare class Billingaccount extends Representation {
    invoices: InvoiceList;
    estimate: EstimateList;
    paymentmethods: PaymentmethodList;
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase);
}
export default Billingaccount;
