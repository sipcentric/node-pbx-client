import Representation from './representation';

class Queuestatus extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'queuestatus';
  }
}

export default Queuestatus;
