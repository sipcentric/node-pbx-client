import Representation from './representation';

class Creditstatus extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'creditstatus';
  }
}

export default Creditstatus;
