'use strict';

import RepresentationList from './representationList';

class SipidentityList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'sipidentityList';
    this.itemType = 'sipidentity';
  }

}

export default SipidentityList;
