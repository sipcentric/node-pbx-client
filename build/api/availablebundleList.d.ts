import RepresentationList from './representationList';
import { RepresentationBase, NimveloClient } from '../interfaces';
declare class AvailablebundleList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default AvailablebundleList;
