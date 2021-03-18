import RepresentationList from './representationList';
import { Callback, QueryParams, RepresentationBase } from '../interfaces';
import { APISipIdentity, APISipRegistration } from '../interfaces/api';
import Sipcentric from '.';
import { RepresentationType } from './representation';

type GetResponse = (
  id?: string,
  params?: QueryParams,
  callback?: Callback,
) => (RepresentationType<APISipIdentity> & APISipIdentity) | void;

class SipidentityList extends RepresentationList<APISipIdentity> {
  public registrations: RepresentationList<APISipRegistration>;

  constructor(client: Sipcentric, parent: RepresentationBase) {
    super(client, 'sipidentity', parent);

    // A shortcut to get registrations without getting sipidentity first
    this.registrations = new RepresentationList<APISipRegistration>(
      this.client,
      'sipregistration',
      this,
    );
  }

  // FIXME
  // @ts-ignore
  get: GetResponse;
}

export default SipidentityList;
