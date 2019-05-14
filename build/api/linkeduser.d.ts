import Representation from "./representation";
import { NimveloClient, ApiItem, RepresentationBase } from "../interfaces";
declare class Linkeduser extends Representation {
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase);
}
export default Linkeduser;
