import RepresentationList from './representationList';

class PreferenceList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'preferenceList';
    this._itemType = 'preference';
  }
}

export default PreferenceList;
