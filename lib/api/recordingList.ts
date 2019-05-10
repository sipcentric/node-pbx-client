import RepresentationList from './representationList';
import Representation from './representation';

class RecordingList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'recordingList';
    this._itemType = 'recording';
  }
}

export default RecordingList;
