import Representation from './representation';
import ForwardingruleList from './forwardingruleList';
import SipidentityList from './sipidentityList';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';
declare class Phone extends Representation {
    sip: SipidentityList;
    forwardingrules: ForwardingruleList;
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase | string);
}
export default Phone;
