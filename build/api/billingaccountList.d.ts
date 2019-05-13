import RepresentationList from './representationList';
import { RepresentationBase, NimveloClient } from '../interfaces';
declare class BillingaccountList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default BillingaccountList;
