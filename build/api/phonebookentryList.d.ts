import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class PhonebookentryList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default PhonebookentryList;
