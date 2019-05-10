import Representation from './representation';

class Mailbox extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'mailbox';
  }
}

export default Mailbox;
