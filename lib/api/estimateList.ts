import RepresentationList from './representationList';
import Representation from './representation';

class EstimateList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'estimateList';
    this._itemType = 'estimate';
  }
}

export default EstimateList;
