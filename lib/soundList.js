'use strict';

import RepresentationList from './representationList';

class SoundList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'soundList';
    this.itemType = 'sound';
  }

}

export default SoundList;
