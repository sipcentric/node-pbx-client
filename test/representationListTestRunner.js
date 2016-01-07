const representationListTests = require('./representationListTests');

const toTest = [{
  objectType: 'phonebookentry',
  listObjectType: 'phonebookentryList',
  listEndpoint: 'phonebook'
}, {
  objectType: 'call',
  listObjectType: 'callList',
  listEndpoint: 'calls'
}];

toTest.forEach(representationListTests);
