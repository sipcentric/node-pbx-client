import extend = require('deep-extend');

import Representation from './representation';
import Phone from './phone';
import PhoneNumberList from './phonenumberList';
import Queue from './queue';
import Smsmessage from './smsmessage';
import { SipcentricClient, ApiItem, ApiItemType } from '../interfaces';
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
  APIRoutingRule,
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

  constructor(client: SipcentricClient, item: APICustomer) {
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

  // FIXME limit to types creatable in customer
  create = <Item extends { type: ApiItemType }>(
    type: Item['type'],
    properties: Item,
  ) => {
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
  };
}

export default CustomerRepresentation;
