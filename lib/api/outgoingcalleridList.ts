import RepresentationList from './representationList';
import Representation from './representation';
import { NimveloClient, RepresentationBase } from '../interfaces';

class OutgoingcalleridList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'outgoingcalleridList';
    this._itemType = 'outgoingcallerid';
  }
}

export default OutgoingcalleridList;
