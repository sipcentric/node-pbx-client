import RepresentationList from './representationList';
import Representation from './representation';
import { NimveloClient, RepresentationBase } from '../interfaces';

class TimeintervalList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'timeintervalList';
    this._itemType = 'timeinterval';
  }
}

export default TimeintervalList;
