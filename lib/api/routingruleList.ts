import RepresentationList from './representationList';
import Representation from './representation';

class RoutingruleList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'routingruleList';
    this._itemType = 'routingrule';
  }
}

export default RoutingruleList;
