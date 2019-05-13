import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class CreditstatusList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default CreditstatusList;
