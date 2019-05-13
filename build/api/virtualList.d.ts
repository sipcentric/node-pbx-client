import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class VirtualList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default VirtualList;
