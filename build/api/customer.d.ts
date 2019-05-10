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
declare class Customer extends Representation {
    availablebundles: AvailablebundleList;
    billing: BillingaccountList;
    calls: CallList;
    callbundles: CallbundleList;
    creditstatus: CreditstatusList;
    endpoints: EndpointList;
    groups: GroupList;
    ivrs: IvrList;
    mailboxes: MailboxList;
    music: MusicList;
    outgoingcallerids: OutgoingcalleridList;
    phones: PhoneList;
    phonebook: PhonebookentryList;
    phonenumbers: PhonenumberList;
    prompts: PromptList;
    preferences: PreferenceList;
    queues: QueueList;
    recordings: RecordingList;
    smsmessages: SmsmessageList;
    sounds: SoundList;
    timeintervals: TimeintervalList;
    virtuals: VirtualList;
    constructor(client: NimveloClient, item: ApiItem);
    create(type: string, properties: ApiItem): false | Call | Group | Ivr | Mailbox | Music | Phone | Phonebookentry | Prompt | Queue | Smsmessage | Timeinterval | Virtual;
}
export default Customer;
