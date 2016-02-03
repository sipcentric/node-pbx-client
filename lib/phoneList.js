'use strict';

import RepresentationList from './representationList';

class PhoneList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'phoneList';
    this.itemType = 'phone';
  }

}

export default PhoneList;
