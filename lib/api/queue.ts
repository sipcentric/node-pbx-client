import Representation from './representation';
import QueueentryList from './queueentryList';
import QueuemembershipList from './queuemembershipList';
import QueuestatusList from './queuestatusList';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';

class Queue extends Representation {
  entries: QueueentryList;
  memberships: QueuemembershipList;
  status: QueuestatusList;

  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase | string,
  ) {
    super(client, properties, parent);

    this._type = 'queue';

    this.entries = new QueueentryList(this.client, this);
    this.memberships = new QueuemembershipList(this.client, this);
    this.status = new QueuestatusList(this.client, this);
  }
}

export default Queue;
