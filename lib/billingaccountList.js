'use strict';

import RepresentationList from './representationList';

class BillingaccountList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'billingaccountList';
    this.itemType = 'billingaccount';
  }

}

export default BillingaccountList;
