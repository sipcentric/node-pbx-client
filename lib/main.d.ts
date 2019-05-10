interface NimveloClient {
  VERSION: string;
  options: ClientOptions;
  authorization: string;
  customers: any;
  stream: any;
  presenceWatcher: any;

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
    parent: RepresentationBase,
  ): RepresentationInterface;
}

interface ClientOptions {
  username: string;
  password: string;
  customer: string;
  restBase: string;
  streamBase: string;
  json: boolean;
  requestOptions: {
    headers: {
      [header: string]: string;
    };
  };
}

interface RepresentationTypeParams {
  type?: string;
}

interface RepresentationBase {
  id?: string;
  type: string;
  parent: RepresentationBase;
  _unavailableMethods: string[];
}

interface RepresentationInterface extends RepresentationBase {
  save(callback: Callback): Promise<any>;
  delete(callback: Callback): Promise<any>;
}

interface RepresentationListInterface extends RepresentationBase {
  get(id: string, params: QueryParams, callback: Callback): Promise<any> | void;
  create(properties?: object): RepresentationInterface;
}

interface ApiList<T extends ApiItem> {
  items: T[];
  totalItems: number;
  pageSize: number;
  page: number;
  nextPage?: string;
  prevPage?: string;
}

interface FormattedApiList<T extends ApiItem> {
  // items: RepresentationInterface;
  items: T[];
  totalItems: number;
  pageSize: number;
  page: number;
  nextPage?: PromisedCallback;
  prevPage?: PromisedCallback;
}

interface ApiItem {
  type: string;
  // [additionalParams: string]: any;
}

interface QueryParams {
  [param: string]: string;
}

type Callback = (result: any, error?: any) => void;
type PromisedCallback = (callback?: Callback) => Promise<any>;

declare enum CallDirection {
  IN,
  OUT,
}

declare enum CallScope {
  LOCAL,
  DOMAIN,
  EXTERNAL,
}

declare enum CallOutcome {
  ANSWERED,
  NO_ANSWER,
  BUSY,
  FAILED,
}

declare enum CallStatus {
  INACTIVE,
  RINGING,
  ACTIVE,
  ONHOLD,
  TERMINATED,
}

declare enum SmsSendStatus {
  PENDING,
  SENT,
  FAILED,
}

declare enum SmsDirection {
  IN,
  OUT,
}

interface Links {
  [id: string]: string;
}

interface ApiCall extends ApiItem {
  type: 'call';
  uri: string;
  created: string;
  scope: CallScope;
  direction: CallDirection;
  from: string;
  to: string;
  callStarted: string;
  outcome: CallOutcome;
  duration: number;
  cost: number;
  callId: string;
  linkedId: string;
  links: Links;
}
