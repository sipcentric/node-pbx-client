import Representation from './representation';
declare class Invoice extends Representation {
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase);
}
export default Invoice;
