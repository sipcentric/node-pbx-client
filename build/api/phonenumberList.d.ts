import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class PhonenumberList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default PhonenumberList;
