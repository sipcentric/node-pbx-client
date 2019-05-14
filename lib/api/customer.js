const extend = require('deep-extend');

const Representation = require('./representation');
const AvailablebundleList = require('./availablebundleList');
const BillingaccountList = require('./billingaccountList');
const CallList = require('./callList');
const Call = require('./call');
const CallbundleList = require('./callbundleList');
const CreditstatusList = require('./creditstatusList');
const EndpointList = require('./endpointList');
const GroupList = require('./groupList');
const Group = require('./group');
const IvrList = require('./ivrList');
const Ivr = require('./ivr');
const LinkeduserList = require('./linkeduserList');
const Linkeduser = require('./linkeduser');
const MailboxList = require('./mailboxList');
const Mailbox = require('./mailbox');
const MusicList = require('./musicList');
const Music = require('./music');
const OutgoingcalleridList = require('./outgoingcalleridList');
const PhoneList = require('./phoneList');
const Phone = require('./phone');
const PhonebookentryList = require('./phonebookentryList');
const Phonebookentry = require('./phonebookentry');
const PhonenumberList = require('./phonenumberList');
const PromptList = require('./promptList');
const Prompt = require('./prompt');
const PreferenceList = require('./preferenceList');
const QueueList = require('./queueList');
const Queue = require('./queue');
const RecordingList = require('./recordingList');
const SmsmessageList = require('./smsmessageList');
const Smsmessage = require('./smsmessage');
const SoundList = require('./soundList');
const TimeintervalList = require('./timeintervalList');
const Timeinterval = require('./timeinterval');
const VirtualList = require('./virtualList');
const Virtual = require('./virtual');

class Customer extends Representation {
  constructor(client, item) {
    super(client);

    extend(this, item);

    this.type = 'customer';

    this.availablebundles = new AvailablebundleList(this.client, this);
    this.billing = new BillingaccountList(this.client, this);
    this.calls = new CallList(this.client, this);
    this.callbundles = new CallbundleList(this.client, this);
    this.creditstatus = new CreditstatusList(this.client, this);
    this.endpoints = new EndpointList(this.client, this);
    this.groups = new GroupList(this.client, this);
    this.ivrs = new IvrList(this.client, this);
    this.linkedusers = new LinkeduserList(this.client, this);
    this.mailboxes = new MailboxList(this.client, this);
    this.music = new MusicList(this.client, this);
    this.outgoingcallerids = new OutgoingcalleridList(this.client, this);
    this.phones = new PhoneList(this.client, this);
    this.phonebook = new PhonebookentryList(this.client, this);
    this.phonenumbers = new PhonenumberList(this.client, this);
    this.prompts = new PromptList(this.client, this);
    this.preferences = new PreferenceList(this.client, this);
    this.queues = new QueueList(this.client, this);
    this.recordings = new RecordingList(this.client, this);
    this.smsmessages = new SmsmessageList(this.client, this);
    this.sounds = new SoundList(this.client, this);
    this.timeintervals = new TimeintervalList(this.client, this);
    this.virtuals = new VirtualList(this.client, this);

    this._unavailableMethods = ['delete'];
    this._unavailableMethods.forEach(method => delete this[method]);
  }


  create(type, properties) {
    // Figure out which class to use for this type

    switch (type) {
      case 'call':
        return new Call(this.client, properties, this);
      case 'group':
        return new Group(this.client, properties, this);
      case 'ivr':
        return new Ivr(this.client, properties, this);
      case 'linkeduser':
        return new Linkeduser(this.client, properties, this);
      case 'mailbox':
        return new Mailbox(this.client, properties, this);
      case 'music':
        return new Music(this.client, properties, this);
      case 'phone':
        return new Phone(this.client, properties, this);
      case 'phonebookentry':
        return new Phonebookentry(this.client, properties, this);
      case 'prompt':
        return new Prompt(this.client, properties, this);
      case 'queue':
        return new Queue(this.client, properties, this);
      case 'smsmessage':
        return new Smsmessage(this.client, properties, this);
      case 'timeinterval':
        return new Timeinterval(this.client, properties, this);
      case 'virtual':
        return new Virtual(this.client, properties, this);
      default:
        return false;
    }
  }
}

module.exports = Customer;
