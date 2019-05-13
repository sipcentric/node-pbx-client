import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class PhoneList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default PhoneList;
