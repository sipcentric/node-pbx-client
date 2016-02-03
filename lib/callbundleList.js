'use strict';

import RepresentationList from './representationList';

class CallbundleList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'callbundleList';
    this.itemType = 'callbundle';
  }

}

export default CallbundleList;
