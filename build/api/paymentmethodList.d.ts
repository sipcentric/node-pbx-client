import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class Paymentmethod extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default Paymentmethod;
