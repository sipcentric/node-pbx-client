import Representation from './representation';

class Ivr extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'ivr';
  }
}

export default Ivr;
