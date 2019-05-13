import RepresentationList from './representationList';
import { RepresentationBase, NimveloClient } from '../interfaces';
declare class CallList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default CallList;
