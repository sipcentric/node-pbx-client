'use strict';

import RepresentationList from './representationList';

class AvailablebundleList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'availablebundleList';
    this.itemType = 'availablebundle';
  }

}

export default AvailablebundleList;
