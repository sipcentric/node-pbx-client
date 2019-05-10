import RepresentationList from './representationList';
import Representation from './representation';

class CreditstatusList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'creditstatusList';
    this._itemType = 'creditstatus';
  }
}

export default CreditstatusList;
