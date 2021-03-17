import { RepresentationType } from './api/representation';

export interface ClientOptions {
  username: string;
  password: string;
  auth: 'basic' | 'token';
  token?: string;
  customer: string;
  restBase: string;
  authBase: string;
  streamBase: string;
  json: boolean;
  partnerId?: string;
  requestOptions: {
    headers: {
      [header: string]: string;
    };
  };
}

export interface RepresentationTypeParams {
  type?: ApiItemType;
}

export interface RepresentationBase {
  id?: string;
  type: string;
  parent: RepresentationBase | string;
  _unavailableMethods: string[];
}

// export interface RepresentationInterface<Item> extends RepresentationBase {
//   save(callback?: Callback): Promise<Item>;
//   delete(callback?: Callback): Promise<Item>;
// }

// export interface RepresentationListInterface<Item> extends RepresentationBase {
//   itemType: string;
//   get(
//     id?: string,
//     params?: QueryParams,
//     callback?: Callback,
//   ): Promise<
//     RepresentationInterface<Item> | RepresentationListInterface<Item>
//   > | void;
//   create(properties?: object): RepresentationInterface<Item>;
// }

export interface ApiList<T extends ApiItem> {
  items?: T[];
  totalItems: number;
  pageSize: number;
  page: number;
  nextPage?: string;
  prevPage?: string;
}

export interface FormattedApiListMetadata {
  // items: RepresentationInterface;
  totalItems: number;
  pageSize: number;
  page: number;
  nextPage?: PromisedCallback;
  prevPage?: PromisedCallback;
}

export interface FormattedApiList<Item extends ApiItem> {
  meta: FormattedApiListMetadata;
  items: (RepresentationType<Item> & Item)[];
}

export type ApiItemType =
  | 'availablebundle'
  | 'billingaccount'
  | 'creditstatus'
  | 'customers'
  | 'customer'
  | 'did'
  | 'estimate'
  | 'phone'
  | 'virtual'
  | 'group'
  | 'queue'
  | 'ivr'
  | 'mailbox'
  | 'invoice'
  | 'outgoingcallerid'
  | 'phonebookentry'
  | 'queueentry'
  | 'queuemembership'
  | 'queuestatus'
  | 'recording'
  | 'sipidentity'
  | 'sipidentitylist'
  | 'sipregistration'
  | 'smsmessage'
  | 'sound'
  | 'prompt'
  | 'music'
  // //
  | 'forwardingrule'
  | 'routingrule'
  | 'call'
  // FIXME 'customerbundle' type?
  | 'customerbundle'
  | 'linkeduser'
  | 'customerpreferences'
  | 'timeinterval'
  | 'invite'
  | 'bargegroup'
  | 'worldpay'
  | 'stripe'
  | 'trunk'
  | 'callcredit';

export interface ApiItemWithoutId {
  type: ApiItemType;
  uri: string;
  created?: Date;
  parent?: string; // uri of parent item
}
export interface ApiItem extends ApiItemWithoutId {
  id: string;
}

export interface QueryParams {
  [param: string]: string;
}

export type Callback = (result: any, error?: any) => void;
export type PromisedCallback = (callback?: Callback) => Promise<any>;

export interface WebRTCConfig {
  username: string;
  password: string;
  instanceId: string;
  [k: string]: any;
}

export interface CallOptions {
  mediaConstraints: {
    audio: boolean;
    video: boolean;
  };
  rtcOfferConstraints: {
    offerToReceiveVideo: number;
  };
  [k: string]: any;
}

export interface IWebRTC {
  dial(target: string, options: CallOptions): any;
  emitUserStateChanged(user: string, state: string): any;
  getSubscription(message: any): any;
  updateVersion(request: any, version: any): any;
  updateSubscriptionState(request: any): any;
  storeSubscription(response: any): any;
  expireSubscription(response: any): any;
  clearSubscriptions(): any;
  subscribeToUser(
    user: string,
    replacesSubscription: any,
    extraHeaders?: string[],
  ): any;
  resubscribeToUser(subscription: any): any;
  sendSubscribeRequest(
    ruri: string,
    options: any,
    extraHeaders?: string[],
  ): any;
  subscribeResponseHandler(response: any): any;
}
