import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class EstimateList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default EstimateList;
