import RepresentationList from './representationList';
import Representation from './representation';
import { NimveloClient, RepresentationBase } from '../interfaces';

class Paymentmethod extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'paymentmethodList';
    this._itemType = 'paymentmethod';
  }
}

export default Paymentmethod;
