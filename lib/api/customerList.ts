import RepresentationList from './representationList';

class CustomerList extends RepresentationList {
  constructor(client: NimveloClient) {
    super(client);
    this._type = 'customerList';
    this._itemType = 'customer';
  }
}

export default CustomerList;
