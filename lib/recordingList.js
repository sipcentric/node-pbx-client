'use strict';

const RepresentationList = require('./representationList');

class RecordingList extends RepresentationList {

  constructor(client, customerId) {
    super(client, customerId);
    this.type = 'recordingList';
    this.itemType = 'recording';
  }

}

module.exports = RecordingList;
