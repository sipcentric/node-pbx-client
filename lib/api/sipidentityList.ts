import RepresentationList from './representationList';
import Representation from './representation';

class SipidentityList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'sipidentityList';
    this._itemType = 'sipidentity';
  }
}

export default SipidentityList;
