import RepresentationList from './representationList';
import Representation from './representation';

class SoundList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'soundList';
    this._itemType = 'sound';
  }
}

export default SoundList;
