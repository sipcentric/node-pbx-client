import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class PromptList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default PromptList;
