import RepresentationList from './representationList';
import Representation from './representation';
import { NimveloClient, RepresentationBase } from '../interfaces';

class ForwardingruleList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'forwardingruleList';
    this._itemType = 'forwardingrule';
  }
}

export default ForwardingruleList;
