import Representation from './representation';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';
declare class Invoice extends Representation {
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase | string);
}
export default Invoice;
