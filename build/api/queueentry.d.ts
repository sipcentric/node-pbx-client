import Representation from './representation';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';
declare class Queueentry extends Representation {
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase | string);
}
export default Queueentry;
