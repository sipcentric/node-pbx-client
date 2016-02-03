'use strict';

import RepresentationList from './representationList';

class IvrList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'ivrList';
    this.itemType = 'ivr';
  }

}

export default IvrList;
