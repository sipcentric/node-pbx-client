'use strict';

const RepresentationList = require('./representationList');

class RecordingList extends RepresentationList {

  constructor(client) {
    super(client);
    this.type = 'recordingList';
    this.itemType = 'recording';
  }

}

module.exports = RecordingList;
