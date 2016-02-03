'use strict';

import RepresentationList from './representationList';

class RoutingruleList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'routingruleList';
    this.itemType = 'routingrule';
  }

}

export default RoutingruleList;
