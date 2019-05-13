import Representation from './representation';
import QueueentryList from './queueentryList';
import QueuemembershipList from './queuemembershipList';
import QueuestatusList from './queuestatusList';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';
declare class Queue extends Representation {
    entries: QueueentryList;
    memberships: QueuemembershipList;
    status: QueuestatusList;
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase);
}
export default Queue;
