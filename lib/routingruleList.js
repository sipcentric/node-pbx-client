const RepresentationList = require('./representationList');

class RoutingruleList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'routingruleList';
    this.itemType = 'routingrule';
  }
}

module.exports = RoutingruleList;
