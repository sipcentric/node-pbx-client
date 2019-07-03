import RepresentationList from './representationList';
import Representation from './representation';
import { NimveloClient, RepresentationBase } from '../interfaces';

class PhonebookentryList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'phonebookentryList';
    this._itemType = 'phonebookentry';
  }
}

export default PhonebookentryList;