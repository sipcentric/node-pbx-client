import Representation from './representation';

class Virtual extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'virtual';
  }
}

export default Virtual;
