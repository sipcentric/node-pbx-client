import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class QueuemembershipList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default QueuemembershipList;
