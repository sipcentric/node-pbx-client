'use strict';

const extend = require('deep-extend');

const Representation = require('./representation');
const CallList = require('./callList');
const Call = require('./call');
const PhonebookentryList = require('./phonebookentryList');
const Phonebookentry = require('./phonebookentry');
const RecordingList = require('./recordingList');
const Recording = require('./recording');
const SmsmessageList = require('./smsmessageList');
const Smsmessage = require('./smsmessage');

class Customer extends Representation {

  constructor(client, item) {

    super(client);

    extend(this, item);

    this.type = 'customer';

    this.calls = new CallList(this.client);
    this.phonebook = new PhonebookentryList(this.client);
    this.recordings = new RecordingList(this.client);
    this.smsmessages = new SmsmessageList(this.client);

  }


  create(type, properties) {

    let instance;

    // Figure out which class to use for this type

    switch (type) {
      case 'call':
        return new Call(this.client, properties);
      case 'phonebookentry':
        return new Phonebookentry(this.client, properties);
      case 'recording':
        return new Recording(this.client, properties);
      case 'smsmessage':
        return new Smsmessage(this.client, properties);
      default:
        return false;
    }

    return instance;

  }

}

module.exports = Customer;
