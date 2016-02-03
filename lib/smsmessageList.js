'use strict';

import RepresentationList from './representationList';

class SmsmessageList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'smsmessageList';
    this.itemType = 'smsmessage';
  }

}

export default SmsmessageList;
