import RepresentationList from './representationList';
import Representation from './representation';

class QueuemembershipList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'queuemembershipList';
    this._itemType = 'queuemembership';
  }
}

export default QueuemembershipList;
