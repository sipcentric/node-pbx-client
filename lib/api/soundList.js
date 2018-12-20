const RepresentationList = require('./representationList');

class SoundList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'soundList';
    this.itemType = 'sound';
  }
}

module.exports = SoundList;
