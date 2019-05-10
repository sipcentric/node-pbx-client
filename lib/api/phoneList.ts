import RepresentationList from './representationList';
import Representation from './representation';

class PhoneList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'phoneList';
    this._itemType = 'phone';
  }
}

export default PhoneList;
