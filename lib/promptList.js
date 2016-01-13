'use strict';

const RepresentationList = require('./representationList');

class PromptList extends RepresentationList {

  constructor(client) {
    super(client);
    this.type = 'promptList';
    this.itemType = 'prompt';
  }

}

module.exports = PromptList;
