'use strict';

import RepresentationList from './representationList';

class PhonebookentryList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'phonebookentryList';
    this.itemType = 'phonebookentry';
  }

}

export default PhonebookentryList;
