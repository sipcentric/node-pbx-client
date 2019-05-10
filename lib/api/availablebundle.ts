import Representation from './representation';

class Availablebundle extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'availablebundle';
  }
}

export default Availablebundle;
