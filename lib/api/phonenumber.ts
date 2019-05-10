import Representation from './representation';
import RoutingruleList from './routingruleList';

class Phonenumber extends Representation {
  routingrules: RoutingruleList;

  constructor(
    client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,
  ) {
    super(client, properties, parent);

    this._type = 'phonenumber';

    this.routingrules = new RoutingruleList(this.client, this);
  }
}

export default Phonenumber;
