import Representation from './representation';
import ForwardingruleList from './forwardingruleList';
import SipidentityList from './sipidentityList';
declare class Phone extends Representation {
    sip: SipidentityList;
    forwardingrules: ForwardingruleList;
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase);
}
export default Phone;
