import RepresentationList from "./representationList";
import { NimveloClient, RepresentationBase } from "../interfaces";
declare class LinkeduserList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default LinkeduserList;
