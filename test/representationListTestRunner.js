const representationListTests = require('./representationListTests');

const toTest = [{
  objectType: 'call',
  listObjectType: 'callList',
  listEndpoint: 'calls'
}, {
  objectType: 'outgoingcallerid',
  listObjectType: 'outgoingcalleridList',
  listEndpoint: 'outgoingcallerids'
}, {
  objectType: 'phonebookentry',
  listObjectType: 'phonebookentryList',
  listEndpoint: 'phonebook'
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
