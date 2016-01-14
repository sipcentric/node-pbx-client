'use strict';

const RepresentationList = require('./representationList');

class PromptList extends RepresentationList {

  constructor(client, customerId) {
    super(client, customerId);
    this.type = 'promptList';
    this.itemType = 'prompt';
  }

}

module.exports = PromptList;
