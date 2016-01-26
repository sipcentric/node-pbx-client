'use strict';

const RepresentationList = require('./representationList');

class EndpointList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'endpointList';
    this.itemType = 'endpoint';
  }

}

module.exports = EndpointList;
