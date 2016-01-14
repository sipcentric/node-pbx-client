'use strict';

const RepresentationList = require('./representationList');

class MusicList extends RepresentationList {

  constructor(client, customerId) {
    super(client, customerId);
    this.type = 'musicList';
    this.itemType = 'music';
  }

}

module.exports = MusicList;
