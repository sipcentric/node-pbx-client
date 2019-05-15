import Representation from './representation';
import { RepresentationBase, NimveloClient, ApiItem } from '../interfaces';
declare class Call extends Representation {
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase | string);
}
export default Call;
