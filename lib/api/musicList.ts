import RepresentationList from './representationList';
import Representation from './representation';

class MusicList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'musicList';
    this._itemType = 'music';
  }
}

export default MusicList;
