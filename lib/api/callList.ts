import RepresentationList from './representationList';
import { RepresentationBase, NimveloClient } from '../interfaces';

class CallList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'callList';
    this._itemType = 'call';
  }
}

export default CallList;
