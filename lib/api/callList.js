const RepresentationList = require('./representationList');

class CallList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'callList';
    this.itemType = 'call';
  }
}

module.exports = CallList;
