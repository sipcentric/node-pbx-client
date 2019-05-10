import RepresentationList from './representationList';
import Representation from './representation';

class VirtualList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'virtualList';
    this._itemType = 'virtual';
  }
}

export default VirtualList;
