import Representation from './representation';
import SipregistrationList from './sipregistrationList';
declare class Sipidentity extends Representation {
    registrations: SipregistrationList;
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase);
}
export default Sipidentity;
