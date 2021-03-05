import Representation from './representation';
import { SipcentricClient, ApiItem, RepresentationBase } from '../interfaces';
import { APIPhoneNumber, APIRoutingRule } from '../interfaces/api';
import RepresentationList from './representationList';

class PhoneNumberRepresentation extends Representation<APIPhoneNumber> {
  routingrules: RepresentationList<APIRoutingRule>;

  constructor(
    client: SipcentricClient,
    properties: APIPhoneNumber,
    parent: RepresentationBase | string,
  ) {
    super(client, 'did', properties, parent);

    this.routingrules = new RepresentationList<APIRoutingRule>(
      this.client,
      'routingrule',
      this,
    );
  }
}

export default PhoneNumberRepresentation;
