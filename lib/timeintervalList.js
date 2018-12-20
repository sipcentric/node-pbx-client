'use strict';

const RepresentationList = require('./representationList');

class TimeintervalList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'timeintervalList';
    this.itemType = 'timeinterval';
  }

}

module.exports = TimeintervalList;
