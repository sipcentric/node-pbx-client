import RepresentationList from './representationList';
import { SipcentricClient, RepresentationBase } from '../interfaces';
import { APISipIdentity, APISipRegistration } from '../interfaces/api';

class SipidentityList extends RepresentationList<APISipIdentity> {
  public registrations: RepresentationList<APISipRegistration>;

  constructor(client: SipcentricClient, parent: RepresentationBase) {
    super(client, 'sipidentity', parent);

    // A shortcut to get registrations without getting sipidentity first
    this.registrations = new RepresentationList<APISipRegistration>(
      this.client,
      'sipregistration',
      this,
    );
  }
}

export default SipidentityList;
