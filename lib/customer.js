'use strict';

const extend = require('deep-extend');

const Representation = require('./representation');
const PhonebookentryList = require('./phonebookentryList');
const Phonebookentry = require('./phonebookentry');
const RecordingList = require('./recordingList');
const Recording = require('./recording');

class Customer extends Representation {

  constructor(client, item) {

    super(client);

    extend(this, item);

    this.type = 'customer';

    this.phonebook = new PhonebookentryList(this.client);
    this.recordings = new RecordingList(this.client);

  }


  create(type, properties) {

    let instance;

    // Figure out which class to use for this type

    switch (type) {
      case 'phonebookentry':
        return new Phonebookentry(this.client, properties);
      case 'recording':
        return new Recording(this.client, properties);
      default:
        return false;
    }

    return instance;

  }

}

module.exports = Customer;
