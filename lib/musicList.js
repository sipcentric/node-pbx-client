'use strict';

import RepresentationList from './representationList';

class MusicList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'musicList';
    this.itemType = 'music';
  }

}

export default MusicList;
