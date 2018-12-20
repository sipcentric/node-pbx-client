'use strict';

const RepresentationList = require('./representationList');

class AvailablebundleList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'availablebundleList';
    this.itemType = 'availablebundle';
  }

}

module.exports = AvailablebundleList;
