'use strict';

const RepresentationList = require('./representationList');

class EstimateList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'estimateList';
    this.itemType = 'estimate';
  }

}

module.exports = EstimateList;
