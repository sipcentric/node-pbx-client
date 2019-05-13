import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class InvoiceList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default InvoiceList;
