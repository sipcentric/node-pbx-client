import RepresentationList from './representationList';
import Representation from './representation';

class MailboxList extends RepresentationList {
  constructor(client: NimveloClient, parent: RepresentationBase) {
    super(client, parent);
    this._type = 'mailboxList';
    this._itemType = 'mailbox';
  }
}

export default MailboxList;
