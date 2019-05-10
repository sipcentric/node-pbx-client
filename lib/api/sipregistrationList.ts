import RepresentationList from './representationList';
import Representation from './representation';

class SipregistrationList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'sipregistrationList';
    this._itemType = 'sipregistration';
  }
}

export default SipregistrationList;
