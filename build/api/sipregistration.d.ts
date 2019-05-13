import Representation from './representation';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';
declare class Sipregistration extends Representation {
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase);
}
export default Sipregistration;
