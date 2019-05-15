import Representation from './representation';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';
declare class Queuestatus extends Representation {
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase | string);
}
export default Queuestatus;
