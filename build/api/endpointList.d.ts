import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class EndpointList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default EndpointList;
