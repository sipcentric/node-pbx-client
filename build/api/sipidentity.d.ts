import Representation from './representation';
import SipregistrationList from './sipregistrationList';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';
declare class Sipidentity extends Representation {
    registrations: SipregistrationList;
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase | string);
}
export default Sipidentity;
