'use strict';

const RepresentationList = require('./representationList');

class CallBundleList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'callBundleList';
    this.itemType = 'callBundle';
  }

}

module.exports = CallBundleList;
