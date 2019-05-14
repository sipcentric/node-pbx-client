import Representation from "./representation";
import { NimveloClient, ApiItem, RepresentationBase } from "../interfaces";

class Linkeduser extends Representation {
  constructor(client: NimveloClient,
    properties: ApiItem,
    parent: RepresentationBase,) {
    super(client, properties, parent);

    this._type = 'linkeduser';
  }
}

export default Linkeduser;
