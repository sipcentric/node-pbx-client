import RepresentationList from './representationList';
import Representation from './representation';

class Paymentmethod extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'paymentmethodList';
    this._itemType = 'paymentmethod';
  }
}

export default Paymentmethod;
