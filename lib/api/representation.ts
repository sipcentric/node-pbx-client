import extend = require('deep-extend');
import Sipcentric from '.';
import {
  RepresentationBase,
  Callback,
  ApiItemType,
  ApiItem,
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
class Representation<Item extends ApiItem> {
  protected client: Sipcentric;
  public id?: string;
  public parent: RepresentationBase | string;
  public _unavailableMethods: string[];

  protected _type: ApiItemType;
  protected _json: Item;

  public get type(): ApiItemType {
    return this._type;
  }

  public get json(): Item {
    return this._json;
  }

  constructor(
    client: Sipcentric,
    type: Item['type'],
    properties?: Item,
    parent?: RepresentationBase | string,
  ) {
    this.client = client;
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

  save = (callback?: Callback) => {
    return this.client._saveRepresentation(this, callback);
  };

  delete = (callback?: Callback) => {
    return this.client._deleteRepresentation(this, callback);
  };
}

export default Representation;

export type RepresentationType<T extends ApiItem> = T extends APIBilling
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
