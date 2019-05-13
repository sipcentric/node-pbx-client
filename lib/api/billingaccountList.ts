import RepresentationList from './representationList';
import Representation from './representation';
import { RepresentationBase, NimveloClient } from '../interfaces';

class BillingaccountList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'billingaccountList';
    this._itemType = 'billingaccount';
  }
}

export default BillingaccountList;
