import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class GroupList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default GroupList;
