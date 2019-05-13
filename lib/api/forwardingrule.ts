import Representation from './representation';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';

class Forwardingrule extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'forwardingrule';
  }
}

export default Forwardingrule;
