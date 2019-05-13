import Representation from './representation';
import { RepresentationBase, NimveloClient, ApiItem } from '../interfaces';

class Callbundle extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'callbundle';
  }
}

export default Callbundle;
