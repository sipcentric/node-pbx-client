import Representation from './representation';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';

class Outgoingcallerid extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'outgoingcallerid';

    this._unavailableMethods = ['save', 'delete'];
    this._unavailableMethods.forEach((method) => {
      delete (this as any)[method];
    });
  }
}

export default Outgoingcallerid;
