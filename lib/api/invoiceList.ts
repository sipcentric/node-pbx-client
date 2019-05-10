import RepresentationList from './representationList';
import Representation from './representation';

class InvoiceList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'invoiceList';
    this._itemType = 'invoice';
  }
}

export default InvoiceList;
