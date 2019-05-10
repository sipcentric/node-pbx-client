const smsmessages = [
  {
    type: "smsmessage",
    id: "1348579",
    uri: "https://pbx.sipcentric.com/api/v1/customers/5/sms/1348579",
    parent: "https://pbx.sipcentric.com/api/v1/customers/5",
    created: "2015-10-30T17:29:10Z",
    direction: "IN",
    from: "07777777777",
    to: "03301200030",
    body: "Hey, how about this awesome node client? Not too shabby!",
    cost: 0.0
  },
  {
    type: "smsmessage",
    id: "1351789",
    uri: "https://pbx.sipcentric.com/api/v1/customers/5/sms/1351789",
    parent: "https://pbx.sipcentric.com/api/v1/customers/5",
    created: "2015-02-26T12:14:17Z",
    direction: "OUT",
    from: "03301200030",
    to: "07777777777",
    body: "It's white and gold, end of discussion!",
    cost: 0.1
  },
  {
    type: "smsmessage",
    id: "1354924",
    uri: "https://pbx.sipcentric.com/api/v1/customers/5/sms/1354924",
    parent: "https://pbx.sipcentric.com/api/v1/customers/5",
    created: "2015-02-02T09:32:33Z",
    direction: "IN",
    from: "01234567890",
    to: "03301200030",
    body: "Did you see left shark yesterday?",
    cost: 0.0
  }
];

export default {
  singleObject: smsmessages[2],

  listSingle: {
    totalItems: 1,
    pageSize: 20,
    page: 1,
    items: [smsmessages[1]]
  },

  listMultiple: {
    totalItems: 3,
    pageSize: 20,
    page: 1,
    items: smsmessages
  }
};
