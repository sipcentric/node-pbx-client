import RepresentationList from "./representationList";
import { NimveloClient, RepresentationBase } from "../interfaces";

class LinkeduserList extends RepresentationList {
  constructor(client: NimveloClient,
    parent: RepresentationBase,) {
    super(client, parent);
    this._type = 'linkeduserList';
    this._itemType = 'linkeduser';
  }
}

export default LinkeduserList;
