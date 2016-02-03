'use strict';

import RepresentationList from './representationList';

class TimeintervalList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'timeintervalList';
    this.itemType = 'timeinterval';
  }

}

export default TimeintervalList;
