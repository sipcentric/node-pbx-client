import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class RecordingList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default RecordingList;
