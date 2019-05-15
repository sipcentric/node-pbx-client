import Representation from './representation';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';

class Queueentry extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase | string,
  ) {
    super(client, properties, parent);

    this._type = 'queueentry';
  }
}

export default Queueentry;
