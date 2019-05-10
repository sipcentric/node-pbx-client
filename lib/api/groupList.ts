import RepresentationList from './representationList';
import Representation from './representation';

class GroupList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'groupList';
    this._itemType = 'group';
  }
}

export default GroupList;
