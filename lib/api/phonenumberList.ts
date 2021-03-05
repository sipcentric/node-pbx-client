import RepresentationList from './representationList';
import Representation from './representation';
import { SipcentricClient, RepresentationBase } from '../interfaces';
import { APIPhoneNumber } from '../interfaces/api';

class PhoneNumberList extends RepresentationList<APIPhoneNumber> {
  constructor(client: SipcentricClient, parent: RepresentationBase) {
    super(client, 'did', parent);
    // TODO remove
    // this._type = 'phonenumberList';
    // this._itemType = 'phonenumber';

    this._unavailableMethods = ['create'];
    this._unavailableMethods.forEach((method) => delete (this as any)[method]);
  }
}

export default PhoneNumberList;
