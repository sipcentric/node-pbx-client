'use strict';

const RepresentationList = require('./representationList');

class CallbundleList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'callbundleList';
    this.itemType = 'callbundle';
  }

}

module.exports = CallbundleList;
