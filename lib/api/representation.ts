import extend = require('deep-extend');
import {
  RepresentationInterface,
  SipcentricClient,
  RepresentationBase,
  ApiItem,
  Callback,
  ApiItemType,
} from '../interfaces';
import {
  APICallRecording,
  APICustomer,
  APIOutgoingCLI,
  APIPhoneNumber,
  APISipIdentity,
  APISMSMessage,
} from '../interfaces/api';
import { APIBilling } from '../interfaces/billing';
import { APICallQueue, APIPhoneExtension } from '../interfaces/endpoints';
import BillingRepresentation from './billingaccount';
import CustomerRepresentation from './customer';
import OutgoingCallerIdRepresentation from './outgoingcallerid';
import PhoneExtensionRepresentation from './phone';
import PhoneNumberRepresentation from './phonenumber';
import QueueRepresentation from './queue';
import CallRecordingRepresentation from './recording';
import SipIdentityRepresentation from './sipidentity';
import SmsMessageRepresentation from './smsmessage';

// TODO typing
class Representation<Item extends { type: ApiItemType }>
  implements RepresentationInterface<Item> {
  protected _client: SipcentricClient;
  public id?: string;
  public parent: RepresentationBase | string;
  public _unavailableMethods: string[];

  protected _type: ApiItemType;
  protected _json: Item;

  public get client(): SipcentricClient {
    return this._client;
  }

  public get type(): ApiItemType {
    return this._type;
  }

  public get json(): Item {
    return this._json;
  }

  constructor(
    client: SipcentricClient,
    type: Item['type'],
    properties?: Item,
    parent?: RepresentationBase | string,
  ) {
    this._client = client;
    this._type = type;
    if (properties) {
      const { type, ...props } = properties;
      extend(this, props);
    }
    if (parent) {
      this.parent = parent;
    }
    this._json = properties;
  }

  extend = (params: Partial<Item>) => {
    const { type, ...rest } = params;
    extend(this, rest);
    extend(this._json, rest);
  };

  save = (callback?: Callback): Promise<any> => {
    return this._client._saveRepresentation(this, callback);
  };

  delete = (callback?: Callback): Promise<any> => {
    return this._client._deleteRepresentation(this, callback);
  };
}

export default Representation;

export type RepresentationType<
  T extends { type: ApiItemType }
> = T extends APIBilling
  ? BillingRepresentation
  : T extends APICustomer
  ? CustomerRepresentation
  : T extends APIOutgoingCLI
  ? OutgoingCallerIdRepresentation
  : T extends APIPhoneExtension
  ? PhoneExtensionRepresentation
  : T extends APIPhoneNumber
  ? PhoneNumberRepresentation
  : T extends APICallQueue
  ? QueueRepresentation
  : T extends APICallRecording
  ? CallRecordingRepresentation
  : T extends APISipIdentity
  ? SipIdentityRepresentation
  : T extends APISMSMessage
  ? SmsMessageRepresentation
  : Representation<T>;
