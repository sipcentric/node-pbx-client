import RepresentationList from './representationList';
import Representation from './representation';

class EndpointList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'endpointList';
    this._itemType = 'endpoint';
  }
}

export default EndpointList;
