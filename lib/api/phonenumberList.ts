import RepresentationList from './representationList';
import Representation from './representation';

class PhonenumberList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'phonenumberList';
    this._itemType = 'phonenumber';

    this._unavailableMethods = ['create'];
    this._unavailableMethods.forEach((method) => delete (this as any)[method]);
  }
}

export default PhonenumberList;
