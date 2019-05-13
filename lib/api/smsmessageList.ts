import RepresentationList from './representationList';
import Representation from './representation';
import { NimveloClient, RepresentationBase } from '../interfaces';

class SmsmessageList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'smsmessageList';
    this._itemType = 'smsmessage';
  }
}

export default SmsmessageList;
