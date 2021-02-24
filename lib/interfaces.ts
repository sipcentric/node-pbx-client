export interface NimveloClient {
  VERSION: string;
  options: ClientOptions;
  authorization: string;
  customers: any;
  stream: any;
  presenceWatcher: any;
  authPromise: Promise<any>;

  init(options?: Partial<ClientOptions>): Promise<any>;
  _saveRepresentation(
    object: RepresentationInterface,
    callback: Callback,
  ): Promise<any>;
  _deleteRepresentation(
    object: RepresentationInterface,
    callback: Callback,
  ): Promise<any>;
  _getResource(
    type: string,
    object: RepresentationBase,
    ...args: any[]
  ): Promise<any> | void;
  _objectFromItem(
    item: ApiItem,
    parent: RepresentationBase | string,
  ): RepresentationInterface;
}

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
  type?: string;
}

export interface RepresentationBase {
  id?: string;
  type: string;
  parent: RepresentationBase | string;
  _unavailableMethods: string[];
}

export interface RepresentationInterface extends RepresentationBase {
  save(callback?: Callback): Promise<any>;
  delete(callback?: Callback): Promise<any>;
}

export interface RepresentationListInterface extends RepresentationBase {
  get(
    id?: string,
    params?: QueryParams,
    callback?: Callback,
  ): Promise<any> | void;
  create(properties?: object): RepresentationInterface;
}

export interface ApiList<T extends ApiItem> {
  items: T[];
  totalItems: number;
  pageSize: number;
  page: number;
  nextPage?: string;
  prevPage?: string;
}

export interface FormattedApiList {
  // items: RepresentationInterface;
  totalItems: number;
  pageSize: number;
  page: number;
  nextPage?: PromisedCallback;
  prevPage?: PromisedCallback;
}

export interface ApiItem {
  type: string;
  id: string;
  parent?: string;
  // [additionalParams: string]: any;
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
