const phonenumbers = [
  {
    type: "did",
    id: "1",
    uri: "https://pbx.sipcentric.com/api/v1/customers/5/phonenumbers/1",
    parent: "https://pbx.sipcentric.com/api/v1/customers/5",
    created: "2016-01-01T12:00:00Z",
    number: "01212854400",
    identifier: "DID",
    destination: "https://pbx.sipcentric.com/api/v1/customers/5/endpoints/7",
    smsCapable: true,
    smsAllowIncoming: true,
    smsNotificationEmail: "hello@nimvelo.com",
    smsNotificationUrl: "http://www.nimvelo.com/sms",
    faxEnabled: false,
    links: {
      routingRules:
        "https://pbx.sipcentric.com/api/v1/customers/5/phonenumbers/1/routingrules"
    }
  },
  {
    type: "did",
    id: "2",
    uri: "https://pbx.sipcentric.com/api/v1/customers/5/phonenumbers/2",
    parent: "https://pbx.sipcentric.com/api/v1/customers/5",
    created: "2016-01-02T13:00:00Z",
    number: "03301201200",
    identifier: "DID",
    destination: "https://pbx.sipcentric.com/api/v1/customers/5/endpoints/12",
    smsCapable: false,
    faxEnabled: false,
    links: {
      routingRules:
        "https://pbx.sipcentric.com/api/v1/customers/5/phonenumbers/2/routingrules"
    }
  },
  {
    type: "did",
    id: "3",
    uri: "https://pbx.sipcentric.com/api/v1/customers/5/phonenumbers/3",
    parent: "https://pbx.sipcentric.com/api/v1/customers/5",
    created: "2016-01-03T14:00:00Z",
    number: "01234567890",
    identifier: "DID",
    destination: "https://pbx.sipcentric.com/api/v1/customers/5/endpoints/37",
    smsCapable: false,
    faxEnabled: true,
    faxNotificationEmail: "hello@nimvelo.com",
    links: {
      routingRules:
        "https://pbx.sipcentric.com/api/v1/customers/5/phonenumbers/3/routingrules"
    }
  }
];

export default {
  singleObject: phonenumbers[2],

  listSingle: {
    totalItems: 1,
    pageSize: 20,
    page: 1,
    items: [phonenumbers[1]]
  },

  listMultiple: {
    totalItems: 3,
    pageSize: 20,
    page: 1,
    items: phonenumbers
  }
};
