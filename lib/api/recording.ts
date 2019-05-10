import Representation from './representation';

class Recording extends Representation {
  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'recording';

    this._unavailableMethods = ['save'];
    this._unavailableMethods.forEach((method) => delete (this as any)[method]);
  }
}

export default Recording;
