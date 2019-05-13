import RepresentationList from './representationList';
import { RepresentationBase, NimveloClient } from '../interfaces';
declare class CallbundleList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default CallbundleList;
