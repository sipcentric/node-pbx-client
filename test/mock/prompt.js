const prompts = [{
  type: 'prompt',
  id: '1',
  uri: 'http://pbx.sipcentric.com/api/v1/customers/5/sounds/1',
  parent: 'http://pbx.sipcentric.com/api/v1/customers/5',
  created: '2016-01-01T12:00:00Z',
  name: 'Main welcome',
  size: 129612
}, {
  type: 'prompt',
  id: '2',
  uri: 'http://pbx.sipcentric.com/api/v1/customers/5/sounds/2',
  parent: 'http://pbx.sipcentric.com/api/v1/customers/5',
  created: '2016-01-02T13:00:00Z',
  name: 'Out of hours message',
  size: 175402
}, {
  type: 'prompt',
  id: '3',
  uri: 'http://pbx.sipcentric.com/api/v1/customers/5/sounds/3',
  parent: 'http://pbx.sipcentric.com/api/v1/customers/5',
  created: '2016-01-03T14:00:00Z',
  name: 'IVR options',
  size: 78478
}];

module.exports = {

  singleObject: prompts[2],

  listSingle: {
    totalItems: 1,
    pageSize: 20,
    page: 1,
    items: [prompts[1]]
  },

  listMultiple: {
    totalItems: 3,
    pageSize: 20,
    page: 1,
    items: prompts
  }
};
