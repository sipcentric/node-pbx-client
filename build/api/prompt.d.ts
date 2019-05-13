import Representation from './representation';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';
declare class Prompt extends Representation {
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase);
}
export default Prompt;
