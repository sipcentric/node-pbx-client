'use strict';

import RepresentationList from './representationList';

class CustomerList extends RepresentationList {

  constructor(client) {
    super(client);
    this.type = 'customerList';
    this.itemType = 'customer';
  }

}

export default CustomerList;
