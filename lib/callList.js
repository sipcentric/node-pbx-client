'use strict';

import RepresentationList from './representationList';

class CallList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'callList';
    this.itemType = 'call';
  }

}

export default CallList;
