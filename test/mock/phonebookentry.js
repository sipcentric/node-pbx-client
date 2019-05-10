const phonebookentries = [
  {
    type: "phonebookentry",
    id: "1",
    uri: "http://pbx.sipcentric.com/api/v1/customers/5/phonebook/1",
    parent: "http://pbx.sipcentric.com/api/v1/customers/5",
    created: "2016-01-01T12:00:00Z",
    name: "Sundar Pichai",
    phoneNumber: "03303303330",
    email: "sundar@google.com",
    speedDial: 1
  },
  {
    type: "phonebookentry",
    id: "2",
    uri: "http://pbx.sipcentric.com/api/v1/customers/5/phonebook/2",
    parent: "http://pbx.sipcentric.com/api/v1/customers/5",
    created: "2016-01-02T13:00:00Z",
    name: "Tim Cook",
    phoneNumber: "01234567890",
    email: "tcook@apple.com",
    speedDial: 5
  },
  {
    type: "phonebookentry",
    id: "3",
    uri: "http://pbx.sipcentric.com/api/v1/customers/5/phonebook/3",
    parent: "http://pbx.sipcentric.com/api/v1/customers/5",
    created: "2016-01-03T14:00:00Z",
    name: "Bill Gates",
    phoneNumber: "07777777777",
    email: "bgates@microsoft.com",
    speedDial: 7
  }
];

export default {
  singleObject: phonebookentries[2],

  listSingle: {
    totalItems: 1,
    pageSize: 20,
    page: 1,
    items: [phonebookentries[1]]
  },

  listMultiple: {
    totalItems: 3,
    pageSize: 20,
    page: 1,
    items: phonebookentries
  }
};
