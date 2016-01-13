'use strict';

const RepresentationList = require('./representationList');

class SoundList extends RepresentationList {

  constructor(client) {
    super(client);
    this.type = 'soundList';
    this.itemType = 'sound';
  }

}

module.exports = SoundList;
