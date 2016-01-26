'use strict';

const RepresentationList = require('./representationList');

class IvrList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'ivrList';
    this.itemType = 'ivr';
  }

}

module.exports = IvrList;
