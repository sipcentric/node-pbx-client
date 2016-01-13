const music = [{
  type: 'music',
  id: '4',
  uri: 'http://pbx.sipcentric.com/api/v1/customers/5/sounds/4',
  parent: 'http://pbx.sipcentric.com/api/v1/customers/5',
  created: '2016-01-01T12:00:00Z',
  name: 'Style',
  size: 256046,
  enabled: true
}, {
  type: 'music',
  id: '5',
  uri: 'http://pbx.sipcentric.com/api/v1/customers/5/sounds/5',
  parent: 'http://pbx.sipcentric.com/api/v1/customers/5',
  created: '2016-01-02T13:00:00Z',
  name: 'Roar',
  size: 559274,
  enabled: false
}, {
  type: 'music',
  id: '6',
  uri: 'http://pbx.sipcentric.com/api/v1/customers/5/sounds/6',
  parent: 'http://pbx.sipcentric.com/api/v1/customers/5',
  created: '2016-01-03T14:00:00Z',
  name: 'Shake it off',
  size: 349810,
  enabled: true
}];

module.exports = {

  singleObject: music[2],

  listSingle: {
    totalItems: 1,
    pageSize: 20,
    page: 1,
    items: [music[1]]
  },

  listMultiple: {
    totalItems: 3,
    pageSize: 20,
    page: 1,
    items: music
  }
};
