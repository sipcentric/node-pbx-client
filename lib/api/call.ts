import Representation from './representation';
import { RepresentationBase, NimveloClient, ApiItem } from '../interfaces';

class Call extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase | string,
  ) {
    super(client, properties, parent);

    this._type = 'call';
  }
}

export default Call;
