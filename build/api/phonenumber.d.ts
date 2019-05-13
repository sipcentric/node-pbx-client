import Representation from './representation';
import RoutingruleList from './routingruleList';
import { NimveloClient, ApiItem, RepresentationBase } from '../interfaces';
declare class Phonenumber extends Representation {
    routingrules: RoutingruleList;
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase);
}
export default Phonenumber;
