import Representation from './representation';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';

class Recording extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase | string,
  ) {
    super(client, properties, parent);

    this._type = 'recording';

    this._unavailableMethods = ['save'];
    this._unavailableMethods.forEach((method) => delete (this as any)[method]);
  }
}

export default Recording;
