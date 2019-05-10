import Representation from './representation';

class Paymentmethod extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'paymentmethod';
  }
}

export default Paymentmethod;
