const RepresentationList = require('./representationList');

class LinkeduserList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'linkeduserList';
    this.itemType = 'linkeduser';
  }
}

module.exports = LinkeduserList;
