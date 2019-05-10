import Representation from './representation';

class Timeinterval extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'timeinterval';
  }
}

export default Timeinterval;
