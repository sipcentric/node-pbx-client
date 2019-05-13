import extend = require('deep-extend');

import Representation from './representation';
import AvailablebundleList from './availablebundleList';
import BillingaccountList from './billingaccountList';
import CallList from './callList';
import Call from './call';
import CallbundleList from './callbundleList';
import CreditstatusList from './creditstatusList';
import EndpointList from './endpointList';
import GroupList from './groupList';
import Group from './group';
import IvrList from './ivrList';
import Ivr from './ivr';
import MailboxList from './mailboxList';
import Mailbox from './mailbox';
import MusicList from './musicList';
import Music from './music';
import OutgoingcalleridList from './outgoingcalleridList';
import PhoneList from './phoneList';
import Phone from './phone';
import PhonebookentryList from './phonebookentryList';
import Phonebookentry from './phonebookentry';
import PhonenumberList from './phonenumberList';
import PromptList from './promptList';
import Prompt from './prompt';
import PreferenceList from './preferenceList';
import QueueList from './queueList';
import Queue from './queue';
import RecordingList from './recordingList';
import SmsmessageList from './smsmessageList';
import Smsmessage from './smsmessage';
import SoundList from './soundList';
import TimeintervalList from './timeintervalList';
import Timeinterval from './timeinterval';
import VirtualList from './virtualList';
import Virtual from './virtual';
import { NimveloClient, ApiItem } from '../interfaces';

class Customer extends Representation {
  public availablebundles: AvailablebundleList;
  public billing: BillingaccountList;
  public calls: CallList;
  public callbundles: CallbundleList;
  public creditstatus: CreditstatusList;
  public endpoints: EndpointList;
  public groups: GroupList;
  public ivrs: IvrList;
  public mailboxes: MailboxList;
  public music: MusicList;
  public outgoingcallerids: OutgoingcalleridList;
  public phones: PhoneList;
  public phonebook: PhonebookentryList;
  public phonenumbers: PhonenumberList;
  public prompts: PromptList;
  public preferences: PreferenceList;
  public queues: QueueList;
  public recordings: RecordingList;
  public smsmessages: SmsmessageList;
  public sounds: SoundList;
  public timeintervals: TimeintervalList;
  public virtuals: VirtualList;

  constructor(client: NimveloClient, item: ApiItem) {
    super(client);

    const { type, ...rest } = item;
    extend(this, rest);

    this._type = 'customer';

    this.availablebundles = new AvailablebundleList(this.client, this);
    this.billing = new BillingaccountList(this.client, this);
    this.calls = new CallList(this.client, this);
    this.callbundles = new CallbundleList(this.client, this);
    this.creditstatus = new CreditstatusList(this.client, this);
    this.endpoints = new EndpointList(this.client, this);
    this.groups = new GroupList(this.client, this);
    this.ivrs = new IvrList(this.client, this);
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
    this._unavailableMethods.forEach((method) => delete (this as any)[method]);
  }

  create(type: string, properties: ApiItem) {
    // Figure out which class to use for this type

    switch (type) {
      case 'call':
        return new Call(this.client, properties, this);
      case 'group':
        return new Group(this.client, properties, this);
      case 'ivr':
        return new Ivr(this.client, properties, this);
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

export default Customer;
