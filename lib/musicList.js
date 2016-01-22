'use strict';

const RepresentationList = require('./representationList');

class MusicList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'musicList';
    this.itemType = 'music';
  }

}

module.exports = MusicList;
