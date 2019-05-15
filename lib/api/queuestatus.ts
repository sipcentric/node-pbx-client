import Representation from './representation';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';

class Queuestatus extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase | string,
  ) {
    super(client, properties, parent);

    this._type = 'queuestatus';
  }
}

export default Queuestatus;
