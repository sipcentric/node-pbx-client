import Representation from './representation';

class Prompt extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'prompt';
  }
}

export default Prompt;
