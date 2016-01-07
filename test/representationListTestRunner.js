const representationListTests = require('./representationListTests');

const toTest = [{
  objectType: 'phonebookentry',
  listObjectType: 'phonebookentryList',
  listEndpoint: 'phonebook'
}];

toTest.forEach(representationListTests);
