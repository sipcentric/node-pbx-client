import Representation from './representation';
import { SipcentricClient, RepresentationBase } from '../interfaces';
import { APISipIdentity, APISipRegistration } from '../interfaces/api';
import RepresentationList from './representationList';

class SipIdentityRepresentation extends Representation<APISipIdentity> {
  registrations: RepresentationList<APISipRegistration>;

  constructor(
    client: SipcentricClient,
    properties: APISipIdentity,
    parent: RepresentationBase | string,
  ) {
    super(client, 'sipidentity', properties, parent);

    this.registrations = new RepresentationList<APISipRegistration>(
      this.client,
      'sipregistration',
      this,
    );
  }
}

export default SipIdentityRepresentation;
