'use strict';

const RepresentationList = require('./representationList');

class BillingaccountList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'billingaccountList';
    this.itemType = 'billingaccount';
  }

}

module.exports = BillingaccountList;
