'use strict';

import RepresentationList from './representationList';

class SipregistrationList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'sipregistrationList';
    this.itemType = 'sipregistration';
  }

}

export default SipregistrationList;
