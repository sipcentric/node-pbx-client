import Representation from './representation';
import ForwardingruleList from './forwardingruleList';
import SipidentityList from './sipidentityList';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';

class Phone extends Representation {
  sip: SipidentityList;
  forwardingrules: ForwardingruleList;

  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase | string,
  ) {
    super(client, properties, parent);

    this._type = 'phone';

    this.sip = new SipidentityList(this.client, this);
    this.forwardingrules = new ForwardingruleList(this.client, this);
  }
}

export default Phone;
