import RepresentationList from './representationList';
import Representation from './representation';

class IvrList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'ivrList';
    this._itemType = 'ivr';
  }
}

export default IvrList;
