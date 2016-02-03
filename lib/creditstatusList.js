'use strict';

import RepresentationList from './representationList';

class CreditstatusList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'creditstatusList';
    this.itemType = 'creditstatus';
  }

}

export default CreditstatusList;
