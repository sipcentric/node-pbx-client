import Representation from './representation';
import { RepresentationBase, NimveloClient, ApiItem } from '../interfaces';

class Creditstatus extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase | string,
  ) {
    super(client, properties, parent);

    this._type = 'creditstatus';
  }
}

export default Creditstatus;
