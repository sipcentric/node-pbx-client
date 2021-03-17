import Representation from './representation';
import SipidentityList from './sipidentityList';
import { RepresentationBase } from '../interfaces';
import { APIForwardingRule } from '../interfaces/api';
import RepresentationList from './representationList';
import { APIPhoneExtension } from '../interfaces/endpoints';
import Sipcentric from '.';

class PhoneRepresentation extends Representation<APIPhoneExtension> {
  sip: SipidentityList;
  forwardingrules: RepresentationList<APIForwardingRule>;

  constructor(
    client: Sipcentric,
    properties: APIPhoneExtension,
    parent: RepresentationBase | string,
  ) {
    super(client, 'phone', properties, parent);

    this.sip = new SipidentityList(this.client, this);
    this.forwardingrules = new RepresentationList<APIForwardingRule>(
      this.client,
      'forwardingrule',
      this,
    );
  }
}

export default PhoneRepresentation;
