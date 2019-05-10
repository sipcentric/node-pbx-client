import RepresentationList from './representationList';
import Representation from './representation';

class QueueentryList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'queueentryList';
    this._itemType = 'queueentry';
  }
}

export default QueueentryList;
