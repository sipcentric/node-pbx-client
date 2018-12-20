const RepresentationList = require('./representationList');

class MailboxList extends RepresentationList {
  constructor(client, parent) {
    super(client, parent);
    this.type = 'mailboxList';
    this.itemType = 'mailbox';
  }
}

module.exports = MailboxList;
