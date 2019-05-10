import RepresentationList from './representationList';
import Representation from './representation';

class QueuestatusList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'queuestatusList';
    this._itemType = 'queuestatus';
  }
}

export default QueuestatusList;
