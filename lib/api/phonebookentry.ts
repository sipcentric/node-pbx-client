import Representation from './representation';

class Phonebookentry extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'phonebookentry';
  }
}

export default Phonebookentry;
