import Representation from './representation';
import { SipcentricClient, ApiItem, RepresentationBase } from '../interfaces';
import { APICallQueue } from '../interfaces/endpoints';
import {
  APIQueueEntry,
  APIQueueMembership,
  APIQueueStatus,
} from '../interfaces/api';
import RepresentationList from './representationList';

class QueueRepresentation extends Representation<APICallQueue> {
  entries: RepresentationList<APIQueueEntry>;
  memberships: RepresentationList<APIQueueMembership>;
  status: RepresentationList<APIQueueStatus>;

  constructor(
    client: SipcentricClient,
    properties: APICallQueue,
    parent: RepresentationBase | string,
  ) {
    super(client, 'queue', properties, parent);

    this.entries = new RepresentationList<APIQueueEntry>(
      this.client,
      'queueentry',
      this,
    );
    this.memberships = new RepresentationList<APIQueueMembership>(
      this.client,
      'queuemembership',
      this,
    );
    this.status = new RepresentationList<APIQueueStatus>(
      this.client,
      'queuestatus',
      this,
    );
  }
}

export default QueueRepresentation;
