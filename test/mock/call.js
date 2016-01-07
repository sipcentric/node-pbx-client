const calls = [{
  type: 'call',
  id: '1',
  uri: 'http://pbx.sipcentric.com/api/v1/customers/5/calls/1',
  parent: 'http://pbx.sipcentric.com/api/v1/customers/5',
  created: '2016-01-01T12:00:00Z',
  scope: 'DOMAIN',
  direction: 'IN',
  from: '03303303330',
  to: 'Nimvelo IVR <002>',
  callStarted: '2016-01-01T11:30:00Z',
  outcome: 'ANSWERED',
  duration: 1800,
  cost: 0.000,
  callId: 'ast02-1452095027.2374613',
  linkedId: 'ast02-1452095027.2374613',
  links: {
    recordings: 'https://pbx.sipcentric.com/api/v1/customers/5/recordings?linkedId=ast02-1452095027.2374613'
  }
}, {
  type: 'call',
  id: '2',
  uri: 'http://pbx.sipcentric.com/api/v1/customers/5/calls/2',
  parent: 'http://pbx.sipcentric.com/api/v1/customers/5',
  created: '2016-01-02T13:00:00Z',
  scope: 'DOMAIN',
  direction: 'OUT',
  from: 'Josh Farrant <106>',
  to: '01234567890',
  callStarted: '2016-01-02T12:59:24Z',
  outcome: 'NO_ANSWER',
  duration: 0,
  cost: 0.000,
  callId: 'ast02-1452094411.2373896',
  linkedId: 'ast02-1452094411.2373896',
  links: {
    recordings: 'https://pbx.sipcentric.com/api/v1/customers/5/recordings?linkedId=ast02-1452094411.2373896'
  }
}, {
  type: 'call',
  id: '3',
  uri: 'http://pbx.sipcentric.com/api/v1/customers/5/calls/3',
  parent: 'http://pbx.sipcentric.com/api/v1/customers/5',
  created: '2016-01-03T14:09:21Z',
  scope: 'DOMAIN',
  direction: 'IN',
  from: 'Josh Farrant <106>',
  to: '07777777777',
  callStarted: '2016-01-03T14:07:06Z',
  outcome: 'ANSWERED',
  duration: 122,
  cost: 0.183,
  callId: 'ast03-1452090857.6405603',
  linkedId: 'ast03-1452090840.6405562',
  links: {
    recordings: 'https://pbx.sipcentric.com/api/v1/customers/5/recordings?linkedId=ast02-1452095027.2374613'
  }
}];

module.exports = {

  singleObject: calls[2],

  listSingle: {
    totalItems: 1,
    pageSize: 20,
    page: 1,
    items: [calls[1]]
  },

  listMultiple: {
    totalItems: 3,
    pageSize: 20,
    page: 1,
    items: calls
  }
};
