const RepresentationList = require('./representationList');

class PromptList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'promptList';
    this.itemType = 'prompt';
  }
}

module.exports = PromptList;
