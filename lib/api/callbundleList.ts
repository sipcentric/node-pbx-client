import RepresentationList from './representationList';
import Representation from './representation';

class CallbundleList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'callbundleList';
    this._itemType = 'callbundle';
  }
}

export default CallbundleList;
