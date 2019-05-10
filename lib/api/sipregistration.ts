import Representation from './representation';

class Sipregistration extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'sipregistration';
  }
}

export default Sipregistration;
