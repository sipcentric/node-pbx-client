import RepresentationList from './representationList';
import Representation from './representation';

class QueueList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'queueList';
    this._itemType = 'queue';
  }
}

export default QueueList;
