const representationListTests = require('./representationListTests');

const toTest = [{
  objectType: 'phonebookentry',
  listObjectType: 'phonebookentryList',
  listEndpoint: 'phonebook'
}, {
  objectType: 'call',
  listObjectType: 'callList',
  listEndpoint: 'calls'
}, {
  objectType: 'recording',
  listObjectType: 'recordingList',
  listEndpoint: 'recordings'
}, {
  objectType: 'smsmessage',
  listObjectType: 'smsmessageList',
  listEndpoint: 'sms'
}];

toTest.forEach(representationListTests);
