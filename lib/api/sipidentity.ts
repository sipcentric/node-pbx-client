import Representation from './representation';
import { RepresentationBase } from '../interfaces';
import { APISipIdentity, APISipRegistration } from '../interfaces/api';
import RepresentationList from './representationList';
import Sipcentric from '.';

class SipIdentityRepresentation extends Representation<APISipIdentity> {
  registrations: RepresentationList<APISipRegistration>;

  constructor(
    client: Sipcentric,
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
