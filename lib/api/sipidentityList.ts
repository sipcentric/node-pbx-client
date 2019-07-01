import RepresentationList from './representationList';
import Representation from './representation';
import { NimveloClient, RepresentationBase } from '../interfaces';
import SipregistrationList from './sipregistrationList';

class SipidentityList extends RepresentationList {
  public registrations: RepresentationList;

  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'sipidentityList';
    this._itemType = 'sipidentity';

    // A shortcut to get registrations without getting sipidentity first
    this.registrations = new SipregistrationList(this.client, this);
  }
}

export default SipidentityList;
