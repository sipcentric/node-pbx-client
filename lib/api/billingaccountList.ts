import RepresentationList from './representationList';
import Representation from './representation';

class BillingaccountList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'billingaccountList';
    this._itemType = 'billingaccount';
  }
}

export default BillingaccountList;
