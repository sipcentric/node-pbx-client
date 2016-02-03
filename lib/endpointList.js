'use strict';

import RepresentationList from './representationList';

class EndpointList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'endpointList';
    this.itemType = 'endpoint';
  }

}

export default EndpointList;
