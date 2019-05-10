import Representation from './representation';
import RoutingruleList from './routingruleList';
declare class Phonenumber extends Representation {
    routingrules: RoutingruleList;
    constructor(client: NimveloClient, properties: ApiItem, parent: RepresentationBase);
}
export default Phonenumber;
