import {
  RepresentationListInterface,
  RepresentationBase,
  SipcentricClient,
  QueryParams,
  Callback,
  ApiItemType,
  RepresentationInterface,
  ApiItem,
} from '../interfaces';

class RepresentationList<Item extends ApiItem>
  implements RepresentationListInterface<Item> {
  protected _client: SipcentricClient;
  public parent: RepresentationBase | string;
  public _unavailableMethods: string[];

  protected _type: string;
  protected _itemType: ApiItemType;

  public get client(): SipcentricClient {
    return this._client;
  }

  public get type() {
    return this._type;
  }
  public get itemType() {
    return this._itemType;
  }

  constructor(
    client: SipcentricClient,
    itemType: Item['type'],
    parent?: RepresentationBase | string,
  ) {
    this._client = client;
    this.parent = parent;
    this._itemType = itemType;
    this._type = `${itemType}List`;
  }

  // FIXME conditional type return, also elsewhere where such union is used
  get = (
    id?: string,
    params?: QueryParams,
    callback?: Callback,
  ): Promise<
    RepresentationInterface<Item> | RepresentationListInterface<Item>
  > | void => {
    return this._client._getResource<Item>(
      this.itemType,
      this,
      id,
      params,
      callback,
    );
  };

  create = (properties: Item) => {
    // Make sure the type is correct, and it has no ID
    const { id, ...rest } = properties;
    const sanitizedProperties = {
      ...rest,
      type: this.itemType,
    };

    return this._client._objectFromItem(sanitizedProperties, this.parent);
  };
}

export default RepresentationList;

// this._type = 'availablebundleList';
// this._itemType = 'availablebundle';

// this._type = 'billingaccountList';
// this._itemType = 'billingaccount';

// this._type = 'callbundleList';
// this._itemType = 'callbundle';

// this._type = 'callList';
// this._itemType = 'call';

// this._type = 'creditstatusList';
// this._itemType = 'creditstatus';

// this._type = 'customerList';
// this._itemType = 'customer';

// this._type = 'endpointList';
// this._itemType = 'endpoint';

// this._type = 'estimateList';
// this._itemType = 'estimate';

// this._type = 'forwardingruleList';
// this._itemType = 'forwardingrule';

// this._type = 'groupList';
// this._itemType = 'group';

// this._type = 'invoiceList';
// this._itemType = 'invoice';

// this._type = 'ivrList';
// this._itemType = 'ivr';

// this._type = 'linkeduserList';
// this._itemType = 'linkeduser';

// this._type = 'mailboxList';
// this._itemType = 'mailbox';

// this._type = 'musicList';
// this._itemType = 'music';

// this._type = 'outgoingcalleridList';
// this._itemType = 'outgoingcallerid';

// this._type = 'paymentmethodList';
// this._itemType = 'paymentmethod';

// this._type = 'phonebookentryList';
// this._itemType = 'phonebookentry';

// this._type = 'phoneList';
// this._itemType = 'phone';

// this._type = 'phonenumberList';
// this._itemType = 'phonenumber';
// this._unavailableMethods = ['create'];
// this._unavailableMethods.forEach((method) => delete (this as any)[method]);

// this._type = 'preferenceList';
// this._itemType = 'preference';

// this._type = 'promptList';
// this._itemType = 'prompt';

// this._type = 'queueentryList';
// this._itemType = 'queueentry';

// this._type = 'queueList';
// this._itemType = 'queue';

// this._type = 'queuemembershipList';
// this._itemType = 'queuemembership';

// this._type = 'queuestatusList';
// this._itemType = 'queuestatus';

// this._type = 'recordingList';
// this._itemType = 'recording';

// this._type = 'routingruleList';
// this._itemType = 'routingrule';

// this._type = 'sipidentityList';
// this._itemType = 'sipidentity';
// // A shortcut to get registrations without getting sipidentity first
// this.registrations = new SipregistrationList(this.client, this);

// this._type = 'sipregistrationList';
// this._itemType = 'sipregistration';

// this._type = 'smsmessageList';
// this._itemType = 'smsmessage';

// this._type = 'soundList';
// this._itemType = 'sound';

// this._type = 'timeintervalList';
// this._itemType = 'timeinterval';

// this._type = 'virtualList';
// this._itemType = 'virtual';
