import RepresentationList from './representationList';
import { NimveloClient } from '../interfaces';
declare class CustomerList extends RepresentationList {
    constructor(client: NimveloClient);
}
export default CustomerList;
