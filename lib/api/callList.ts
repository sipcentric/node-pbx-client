import RepresentationList from './representationList';
import Representation from './representation';

class CallList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'callList';
    this._itemType = 'call';
  }
}

export default CallList;
