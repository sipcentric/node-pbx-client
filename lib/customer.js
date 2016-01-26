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

    this.calls = new CallList(this.client, this);
    this.music = new MusicList(this.client, this);
    this.outgoingcallerids = new OutgoingcalleridList(this.client, this);
    this.phonebook = new PhonebookentryList(this.client, this);
    this.phonenumbers = new PhonenumberList(this.client, this);
    this.prompts = new PromptList(this.client, this);
    this.recordings = new RecordingList(this.client, this);
    this.smsmessages = new SmsmessageList(this.client, this);
    this.sounds = new SoundList(this.client, this);

    this._unavailableMethods = ['delete'];
    this._unavailableMethods.forEach(method => delete this[method]);

  }


  create(type, properties) {

    let instance;

    // Figure out which class to use for this type

    switch (type) {
      case 'call':
        return new Call(this.client, properties, this);
      case 'music':
        return new Music(this.client, properties, this);
      case 'outgoingcallerid':
        return new Outgoingcallerid(this.client, properties, this);
      case 'phonebookentry':
        return new Phonebookentry(this.client, properties, this);
      case 'phonenumber':
        return new Phonenumber(this.client, properties, this);
      case 'prompt':
        return new Prompt(this.client, properties, this);
      case 'recording':
        return new Recording(this.client, properties, this);
      case 'smsmessage':
        return new Smsmessage(this.client, properties, this);
      default:
        return false;
    }

    return instance;

  }

}

module.exports = Customer;
