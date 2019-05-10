import Representation from './representation';

class Invoice extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'invoice';
  }
}

export default Invoice;
