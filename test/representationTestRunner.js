const representationTests = require('./representationTests');

const toTest = [{
  objectType: 'call',
  listObjectType: 'callList',
  listEndpoint: 'calls'
}, {
  objectType: 'music',
  listObjectType: 'musicList',
  listEndpoint: 'sounds'
}, {
  objectType: 'outgoingcallerid',
  listObjectType: 'outgoingcalleridList',
  listEndpoint: 'outgoingcallerids'
}, {
  objectType: 'phonebookentry',
  listObjectType: 'phonebookentryList',
  listEndpoint: 'phonebook'
}, {
  objectType: 'phonenumber',
  listObjectType: 'phonenumberList',
  listEndpoint: 'phonenumbers'
}, {
  objectType: 'prompt',
  listObjectType: 'promptList',
  listEndpoint: 'sounds'
}, {
  objectType: 'recording',
  listObjectType: 'recordingList',
  listEndpoint: 'recordings'
}, {
  objectType: 'smsmessage',
  listObjectType: 'smsmessageList',
  listEndpoint: 'sms'
}];

toTest.forEach(representationTests);
