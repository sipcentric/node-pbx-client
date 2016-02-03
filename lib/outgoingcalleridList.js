'use strict';

import RepresentationList from './representationList';

class OutgoingcalleridList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'outgoingcalleridList';
    this.itemType = 'outgoingcallerid';
  }

}

export default OutgoingcalleridList;
