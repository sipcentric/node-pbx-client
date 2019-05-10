import Representation from './representation';

class Routingrule extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'routingrule';
  }
}

export default Routingrule;
