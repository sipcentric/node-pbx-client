import Representation from './representation';

class Queuemembership extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'queuemembership';
  }
}

export default Queuemembership;
