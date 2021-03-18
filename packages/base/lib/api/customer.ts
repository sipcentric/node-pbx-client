import Representation, { RepresentationType } from './representation';
import Phone from './phone';
import PhoneNumberList from './phonenumberList';
import Queue from './queue';
import Smsmessage from './smsmessage';
import { ApiItem, ApiItemType } from '../interfaces';
import {
  APIAvailableBundle,
  APICall,
  APICallBundle,
  APICallRecording,
  APICustomer,
  APILinkedUser,
  APIOutgoingCLI,
  APIPhonebook,
  APIPreferences,
  APISMSMessage,
  APISoundMusic,
  APISoundPrompt,
  APITimeInterval,
} from '../interfaces/api';
import RepresentationList from './representationList';
import { APIBilling, APICreditStatus } from '../interfaces/billing';
import {
  APICallQueue,
  APIIVR,
  APIPhoneExtension,
  APIRingGroup,
  APISharedMailbox,
  APIVirtual,
} from '../interfaces/endpoints';
import Sipcentric from '.';

type CreatableTypes = Extract<
  ApiItemType,
  | 'availablebundle'
  | 'billingaccount'
  | 'call'
  | 'customerbundle'
  | 'creditstatus'
  | 'group'
  | 'ivr'
  | 'linkeduser'
  | 'mailbox'
  | 'music'
  | 'outgoingcallerid'
  | 'phone'
  | 'phonebookentry'
  | 'did'
  | 'prompt'
  | 'customerpreferences'
  | 'queue'
  | 'recording'
  | 'smsmessage'
  | 'timeinterval'
  | 'virtual'
>;

class CustomerRepresentation extends Representation<APICustomer> {
  public availablebundles: RepresentationList<APIAvailableBundle>;
  public billing: RepresentationList<APIBilling>;
  public calls: RepresentationList<APICall>;
  // FIXME 'customerbundle' type?
  public callbundles: RepresentationList<APICallBundle>;
  public creditstatus: RepresentationList<APICreditStatus>;
  // public endpoints: RepresentationList<APIEndpoint>;
  public groups: RepresentationList<APIRingGroup>;
  public ivrs: RepresentationList<APIIVR>;
  public linkedusers: RepresentationList<APILinkedUser>;
  public mailboxes: RepresentationList<APISharedMailbox>;
  public music: RepresentationList<APISoundMusic>;
  public outgoingcallerids: RepresentationList<APIOutgoingCLI>;
  public phones: RepresentationList<APIPhoneExtension>;
  public phonebook: RepresentationList<APIPhonebook>;
  public phonenumbers: PhoneNumberList;
  public prompts: RepresentationList<APISoundPrompt>;
  public preferences: RepresentationList<APIPreferences>;
  public queues: RepresentationList<APICallQueue>;
  public recordings: RepresentationList<APICallRecording>;
  public smsmessages: RepresentationList<APISMSMessage>;
  // public sounds: RepresentationList<APIRoutingRule>;
  public timeintervals: RepresentationList<APITimeInterval>;
  public virtuals: RepresentationList<APIVirtual>;

  constructor(client: Sipcentric, item: APICustomer) {
    super(client, 'customer', item);

    this.availablebundles = new RepresentationList<APIAvailableBundle>(
      this.client,
      'availablebundle',
      this,
    );
    this.billing = new RepresentationList<APIBilling>(
      this.client,
      'billingaccount',
      this,
    );
    this.calls = new RepresentationList<APICall>(this.client, 'call', this);
    this.callbundles = new RepresentationList<APICallBundle>(
      this.client,
      'customerbundle',
      this,
    );
    this.creditstatus = new RepresentationList<APICreditStatus>(
      this.client,
      'creditstatus',
      this,
    );
    // this.endpoints = new EndpointList(this.client, this);
    this.groups = new RepresentationList<APIRingGroup>(
      this.client,
      'group',
      this,
    );
    this.ivrs = new RepresentationList<APIIVR>(this.client, 'ivr', this);
    this.linkedusers = new RepresentationList<APILinkedUser>(
      this.client,
      'linkeduser',
      this,
    );
    this.mailboxes = new RepresentationList<APISharedMailbox>(
      this.client,
      'mailbox',
      this,
    );
    this.music = new RepresentationList<APISoundMusic>(
      this.client,
      'music',
      this,
    );
    this.outgoingcallerids = new RepresentationList<APIOutgoingCLI>(
      this.client,
      'outgoingcallerid',
      this,
    );
    this.phones = new RepresentationList<APIPhoneExtension>(
      this.client,
      'phone',
      this,
    );
    this.phonebook = new RepresentationList<APIPhonebook>(
      this.client,
      'phonebookentry',
      this,
    );
    this.phonenumbers = new PhoneNumberList(this.client, this);
    this.prompts = new RepresentationList<APISoundPrompt>(
      this.client,
      'prompt',
      this,
    );
    this.preferences = new RepresentationList<APIPreferences>(
      this.client,
      'customerpreferences',
      this,
    );
    this.queues = new RepresentationList<APICallQueue>(
      this.client,
      'queue',
      this,
    );
    this.recordings = new RepresentationList<APICallRecording>(
      this.client,
      'recording',
      this,
    );
    this.smsmessages = new RepresentationList<APISMSMessage>(
      this.client,
      'smsmessage',
      this,
    );
    // this.sounds = new SoundList(this.client, this);
    this.timeintervals = new RepresentationList<APITimeInterval>(
      this.client,
      'timeinterval',
      this,
    );
    this.virtuals = new RepresentationList<APIVirtual>(
      this.client,
      'virtual',
      this,
    );

    this._unavailableMethods = ['delete'];
    this._unavailableMethods.forEach((method) => delete (this as any)[method]);
  }

  create = <Item extends ApiItem>(
    type: Item['type'] & CreatableTypes,
    properties: Item,
  ): RepresentationType<Item> => {
    switch (type) {
      case 'phone':
        return new Phone(this.client, properties as any, this) as any;
      case 'queue':
        return new Queue(this.client, properties as any, this) as any;
      case 'smsmessage':
        return new Smsmessage(this.client, properties as any, this) as any;
      default:
        return new Representation<Item>(
          this.client,
          type,
          properties,
          this,
        ) as any;
    }
  };
}

export default CustomerRepresentation;
