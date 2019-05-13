import RepresentationList from './representationList';
import Representation from './representation';
import { RepresentationBase, NimveloClient } from '../interfaces';

class AvailablebundleList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'availablebundleList';
    this._itemType = 'availablebundle';
  }
}

export default AvailablebundleList;
