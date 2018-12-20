const RepresentationList = require('./representationList');

class RecordingList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'recordingList';
    this.itemType = 'recording';
  }
}

module.exports = RecordingList;
