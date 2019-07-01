import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class SipidentityList extends RepresentationList {
    registrations: RepresentationList;
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default SipidentityList;
