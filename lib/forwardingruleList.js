'use strict';

import RepresentationList from './representationList';

class ForwardingruleList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'forwardingruleList';
    this.itemType = 'forwardingrule';
  }

}

export default ForwardingruleList;
