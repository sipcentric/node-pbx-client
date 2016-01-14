'use strict';

const extend = require('deep-extend');

const Representation = require('./representation');
const CallList = require('./callList');
const Call = require('./call');
const MusicList = require('./musicList');
const Music = require('./music');
const OutgoingcalleridList = require('./outgoingcalleridList');
const Outgoingcallerid = require('./outgoingcallerid');
const PhonebookentryList = require('./phonebookentryList');
const Phonebookentry = require('./phonebookentry');
const PhonenumberList = require('./phonenumberList');
const Phonenumber = require('./phonenumber');
const PromptList = require('./promptList');
const Prompt = require('./prompt');
const RecordingList = require('./recordingList');
const Recording = require('./recording');
const SmsmessageList = require('./smsmessageList');
const Smsmessage = require('./smsmessage');
const SoundList = require('./soundList');

class Customer extends Representation {

  constructor(client, item) {

    super(client);

    extend(this, item);

    this.type = 'customer';

    this.customerId = item.id;

    this.calls = new CallList(this.client, this.customerId);
    this.music = new MusicList(this.client, this.customerId);
    this.outgoingcallerids = new OutgoingcalleridList(this.client, this.customerId);
    this.phonebook = new PhonebookentryList(this.client, this.customerId);
    this.phonenumbers = new PhonenumberList(this.client, this.customerId);
    this.prompts = new PromptList(this.client, this.customerId);
    this.recordings = new RecordingList(this.client, this.customerId);
    this.smsmessages = new SmsmessageList(this.client, this.customerId);
    this.sounds = new SoundList(this.client, this.customerId);

    this.unavailableMethods = ['delete'];
    this.unavailableMethods.forEach(method => this[method] = undefined);

  }


  create(type, properties) {

    let instance;

    // Figure out which class to use for this type

    switch (type) {
      case 'call':
        return new Call(this.client, properties, this.customerId);
      case 'music':
        return new Music(this.client, properties, this.customerId);
      case 'outgoingcallerid':
        return new Outgoingcallerid(this.client, properties, this.customerId);
      case 'phonebookentry':
        return new Phonebookentry(this.client, properties, this.customerId);
      case 'phonenumber':
        return new Phonenumber(this.client, properties, this.customerId);
      case 'prompt':
        return new Prompt(this.client, properties, this.customerId);
      case 'recording':
        return new Recording(this.client, properties, this.customerId);
      case 'smsmessage':
        return new Smsmessage(this.client, properties, this.customerId);
      default:
        return false;
    }

    return instance;

  }

}

module.exports = Customer;
