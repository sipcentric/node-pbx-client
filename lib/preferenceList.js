'use strict';

import RepresentationList from './representationList';

class PreferenceList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'preferenceList';
    this.itemType = 'preference';
  }

}

export default PreferenceList;
