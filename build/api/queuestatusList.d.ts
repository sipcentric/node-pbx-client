import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class QueuestatusList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default QueuestatusList;
