'use strict';

const RepresentationList = require('./representationList');

class SoundList extends RepresentationList {

  constructor(client, customerId) {
    super(client, customerId);
    this.type = 'soundList';
    this.itemType = 'sound';
  }

}

module.exports = SoundList;
