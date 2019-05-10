import RepresentationList from './representationList';
import Representation from './representation';

class OutgoingcalleridList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'outgoingcalleridList';
    this._itemType = 'outgoingcallerid';
  }
}

export default OutgoingcalleridList;
