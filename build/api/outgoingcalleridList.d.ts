import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class OutgoingcalleridList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default OutgoingcalleridList;
