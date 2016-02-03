'use strict';

import RepresentationList from './representationList';

class RecordingList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'recordingList';
    this.itemType = 'recording';
  }

}

export default RecordingList;
