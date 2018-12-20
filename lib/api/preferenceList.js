const RepresentationList = require('./representationList');

class PreferenceList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'preferenceList';
    this.itemType = 'preference';
  }
}

module.exports = PreferenceList;
