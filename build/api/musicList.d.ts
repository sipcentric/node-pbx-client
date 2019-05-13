import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class MusicList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default MusicList;
