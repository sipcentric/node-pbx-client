const outgoingcallerids = [{
  type: 'outgoingcallerid',
  id: '1776',
  uri: 'http://pbx.sipcentric.com/api/v1/customers/5/outgoingcallerids/1776',
  parent: 'http://pbx.sipcentric.com/api/v1/customers/5',
  created: '2014-08-06T17:49:34Z',
  number: '03301201200',
  allowCalls: true,
  allowSms: false,
  status: 'APPROVED'
}, {
  type: 'outgoingcallerid',
  id: '2153',
  uri: 'http://pbx.sipcentric.com/api/v1/customers/5/outgoingcallerids/2153',
  parent: 'http://pbx.sipcentric.com/api/v1/customers/5',
  created: '2015-03-18T12:29:14Z',
  number: '01212854400',
  allowCalls: true,
  allowSms: true,
  status: 'APPROVED'
}, {
  type: 'outgoingcallerid',
  id: '2154',
  uri: 'http://pbx.sipcentric.com/api/v1/customers/5/outgoingcallerids/2154',
  parent: 'http://pbx.sipcentric.com/api/v1/customers/5',
  created: '2015-03-18T13:06:23Z',
  number: '03301200000',
  allowCalls: true,
  allowSms: false,
  status: 'APPROVED'
}];

module.exports = {

  singleObject: outgoingcallerids[2],

  listSingle: {
    totalItems: 1,
    pageSize: 20,
    page: 1,
    items: [outgoingcallerids[1]]
  },

  listMultiple: {
    totalItems: 3,
    pageSize: 20,
    page: 1,
    items: outgoingcallerids
  }
};
