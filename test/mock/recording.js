const recordings = [
  {
    type: "recording",
    id: "5121265",
    uri: "https://pbx.sipcentric.com/api/v1/customers/5/recordings/5121265",
    parent: "https://pbx.sipcentric.com/api/v1/customers/5",
    created: "2016-01-07T14:56:04Z",
    direction: "IN",
    partyId: "102",
    started: "2016-01-07T14:48:47Z",
    size: 653505,
    callId: "ast02-1452178120.2442435",
    linkedId: "ast02-1452178120.2442435",
    endpoint: "https://pbx.sipcentric.com/api/v1/customers/5/endpoints/1234"
  },
  {
    type: "recording",
    id: "5126208",
    uri: "https://pbx.sipcentric.com/api/v1/customers/5/recordings/5126208",
    parent: "https://pbx.sipcentric.com/api/v1/customers/5",
    created: "2016-01-07T14:30:02Z",
    direction: "IN",
    partyId: "01234567890",
    started: "2016-01-07T14:28:30Z",
    size: 53230,
    callId: "ast02-1452176900.2441064",
    linkedId: "ast02-1452176882.2441051",
    endpoint: "https://pbx.sipcentric.com/api/v1/customers/5/endpoints/3456"
  },
  {
    type: "recording",
    id: "5123789",
    uri: "https://pbx.sipcentric.com/api/v1/customers/5/recordings/5123789",
    parent: "https://pbx.sipcentric.com/api/v1/customers/5",
    created: "2016-01-07T14:24:01Z",
    direction: "IN",
    partyId: "07777777777",
    started: "2016-01-07T14:21:23Z",
    size: 64670,
    callId: "ast03-1452176470.6473248",
    linkedId: "ast03-1452176442.6473211",
    endpoint: "https://pbx.sipcentric.com/api/v1/customers/5/endpoints/7890"
  }
];

export default {
  singleObject: recordings[2],

  listSingle: {
    totalItems: 1,
    pageSize: 20,
    page: 1,
    items: [recordings[1]]
  },

  listMultiple: {
    totalItems: 3,
    pageSize: 20,
    page: 1,
    items: recordings
  }
};
