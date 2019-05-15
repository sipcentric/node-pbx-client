import Representation from './representation';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';

class Timeinterval extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase | string,
  ) {
    super(client, properties, parent);

    this._type = 'timeinterval';
  }
}

export default Timeinterval;
