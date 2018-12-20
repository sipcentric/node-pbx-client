const RepresentationList = require('./representationList');

class CreditstatusList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'creditstatusList';
    this.itemType = 'creditstatus';
  }
}

module.exports = CreditstatusList;
