'use strict';

const RepresentationList = require('./representationList');

class MusicList extends RepresentationList {

  constructor(client) {
    super(client);
    this.type = 'musicList';
    this.itemType = 'music';
  }

}

module.exports = MusicList;
