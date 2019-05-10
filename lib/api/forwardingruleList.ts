import RepresentationList from './representationList';
import Representation from './representation';

class ForwardingruleList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'forwardingruleList';
    this._itemType = 'forwardingrule';
  }
}

export default ForwardingruleList;
