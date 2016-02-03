'use strict';

import RepresentationList from './representationList';

class EstimateList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'estimateList';
    this.itemType = 'estimate';
  }

}

export default EstimateList;
