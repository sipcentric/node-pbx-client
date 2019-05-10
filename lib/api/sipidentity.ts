import Representation from './representation';
import SipregistrationList from './sipregistrationList';

class Sipidentity extends Representation {
  registrations: SipregistrationList;

  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'sipidentity';

    this.registrations = new SipregistrationList(this.client, this);
  }
}

export default Sipidentity;
