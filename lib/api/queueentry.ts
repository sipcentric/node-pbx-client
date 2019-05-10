import Representation from './representation';

class Queueentry extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'queueentry';
  }
}

export default Queueentry;
