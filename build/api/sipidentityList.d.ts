import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class SipidentityList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default SipidentityList;
