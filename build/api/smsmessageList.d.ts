import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class SmsmessageList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default SmsmessageList;
