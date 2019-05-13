import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class TimeintervalList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default TimeintervalList;
