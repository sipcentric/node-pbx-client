import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class PreferenceList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default PreferenceList;
