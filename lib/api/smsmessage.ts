import Representation from './representation';

class Smsmessage extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'smsmessage';

    this._unavailableMethods = ['delete'];
    this._unavailableMethods.forEach((method) => delete (this as any)[method]);
  }
}

export default Smsmessage;
