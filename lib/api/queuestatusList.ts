import RepresentationList from './representationList';
import Representation from './representation';
import { NimveloClient, RepresentationBase } from '../interfaces';

class QueuestatusList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'queuestatusList';
    this._itemType = 'queuestatus';
  }
}

export default QueuestatusList;
