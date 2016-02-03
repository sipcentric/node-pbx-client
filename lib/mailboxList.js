'use strict';

import RepresentationList from './representationList';

class MailboxList extends RepresentationList {

  constructor(client, parent) {
    super(client, parent);
    this.type = 'mailboxList';
    this.itemType = 'mailbox';
  }

}

export default MailboxList;
