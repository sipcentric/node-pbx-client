'use strict';

import RepresentationList from './representationList';

class Paymentmethod extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'paymentmethodList';
    this.itemType = 'paymentmethod';
  }

}

export default Paymentmethod;
