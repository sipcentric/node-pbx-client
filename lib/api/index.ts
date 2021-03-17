import extend = require('deep-extend');
import { v4 as uuidv4 } from 'uuid';
import BillingAccountRepresentation from './billingaccount';
import CustomerRepresentation from './customer';
import OutgoingCallerIdRepresentation from './outgoingcallerid';
import PhoneRepresentation from './phone';
// import PresenceWatcher from './presenceWatcher';
import QueueRepresentation from './queue';
// import Stream from './stream';
import RecordingRepresentation from './recording';
import SipIdentityRepresentation from './sipidentity';
import SmsMessageRepresentation from './smsmessage';
import instantiateWebRTC from './webRTC';

import Representation, { RepresentationType } from './representation';
import RepresentationList from './representationList';

// Promise + callback polyfill
import nodeify from '../polyfills/nodeifyv2';

// Package version
import * as npmPackage from '../../package.json';
import { isApiItem } from '../guards';
import {
  ClientOptions,
  RepresentationTypeParams,
  ApiItem,
  RepresentationBase,
  Callback,
  QueryParams,
  FormattedApiListMetadata,
  ApiList,
  WebRTCConfig,
  ApiItemType,
  FormattedApiList,
} from '../interfaces';
import {
  getBasicAuthHeader,
  scAuthenticate,
  urlPathForItemType,
} from '../utils/utils';
import { APICustomer } from '../interfaces/api';

const VERSION: string = (npmPackage as any).version;

// type FormatGetResponse<Item extends ApiItem> = {
//   (
//     response: Item,
//     parent: RepresentationBase | string,
//   ): RepresentationType<Item>;

//   (
//     response: ApiList<Item>,
//     parent: RepresentationBase | string,
//   ): FormattedApiList<Item>;
// };
class Sipcentric {
  readonly VERSION: string;
  readonly userAgent: string;
  options: ClientOptions;
  authorization: string;
  authPromise: Promise<any>;
  rateLimit: {
    limit: number;
    remaining: number;
    reset: number;
  };

  public customers: RepresentationList<APICustomer>;
  public stream: any;
  public presenceWatcher: any;

  constructor(options?: Partial<ClientOptions>) {
    this.VERSION = VERSION;
    this.rateLimit = {
      limit: 0,
      remaining: 0,
      reset: 0,
    };

    this.userAgent = `sipcentric-pbx-client/v${VERSION}`;

    this.authPromise = Promise.resolve();

    // this._formatGetResponse = this._formatGetResponse.bind(this);

    this.init(options);
  }

  private getHeaders = () => ({
    ...this.options.requestOptions.headers,
    Authorization: this.authorization,
  });

  public init = (options?: Partial<ClientOptions>) => {
    const authBase =
      (options && options.authBase) ||
      'https://pbx.sipcentric.com/api/v1/authenticate/';
    // TODO handle refreshing tokens?
    if (typeof options !== 'undefined') {
      if (Object.prototype.hasOwnProperty.call(options, 'token')) {
        this.authorization = `Bearer ${this.options.token}`;
      } else if (
        Object.prototype.hasOwnProperty.call(options, 'username') &&
        Object.prototype.hasOwnProperty.call(options, 'password')
      ) {
        if (options.auth === 'token') {
          this.authPromise = scAuthenticate(
            options.username,
            options.password,
            authBase,
          ).then((token) => {
            this.options.token = token;
            this.authorization = `Bearer ${token}`;
            return token;
          });
        } else {
          this.authorization = getBasicAuthHeader(
            options.username,
            options.password,
          );
          // Check if the username and password are correct
          this.authPromise = scAuthenticate(
            options.username,
            options.password,
            authBase,
          );
        }
      }
    }

    const headers: { [k: string]: string } = {
      Accept: 'application/json',
      Authorization: this.authorization,
      'Content-Type': 'application/json',
      'User-Agent': this.userAgent,
      'X-Relationship-Key': 'id',
    };

    if (Object.prototype.hasOwnProperty.call(options, 'partnerId')) {
      headers['X-Partner-Id'] = options.partnerId;
      delete options.partnerId;
    }

    // Merge the default options with the client submitted options
    this.options = extend(
      {
        username: null,
        password: null,
        customer: 'me',
        auth: 'basic',
        restBase: 'https://pbx.sipcentric.com/api/v1/customers/',
        authBase: 'https://pbx.sipcentric.com/api/v1/authenticate/',
        streamBase: 'https://pbx.sipcentric.com/api/v1/stream',
        json: true,
        requestOptions: {
          headers,
        },
      },
      options,
    );

    this.customers = new RepresentationList<APICustomer>(this, 'customer');
    // this.stream = new Stream(this);
    // this.presenceWatcher = new PresenceWatcher(this);

    return this.authPromise;
  };

  public representationFromJson = <T extends ApiItem>(
    json: T,
  ): RepresentationType<T> => {
    return this._objectFromItem(json, json.parent!);
  };

  _updateRateLimits = (response: Response) => {
    const { headers } = response;

    this.rateLimit = {
      limit: Number(headers.get('x-ratelimit-limit')),
      remaining: Number(headers.get('x-ratelimit-remaining')),
      reset: Number(headers.get('x-ratelimit-reset')),
    };
  };

  // eslint-disable-next-line class-methods-use-this
  async getUA(
    config: Partial<WebRTCConfig & { extensionId: string }>,
    modules: { [k: string]: any },
  ) {
    const baseConfig: Partial<WebRTCConfig> = {
      username: undefined,
      password: undefined,
      instanceId: undefined,
      register: false,
      customerId: undefined,
      endpointId: undefined,
      audio: {
        localAudio: undefined,
        remoteAudio: undefined,
      },
    };

    const webRTCConfig = {
      ...baseConfig,
      ...config,
    };

    // FIXME only applicable to browser
    // If we've not been passed an instanceId, check for localStorage
    if (
      config.register && // If we want to register
      !config.instanceId && // and we don't have an instanceId
      window &&
      window.localStorage // and localStorage is available
    ) {
      const keyName = 'sc-instance-id';

      // Get the stored instanceId
      let instanceId = window.localStorage.getItem(keyName);

      // If there isn't a stored instanceId, generate one and store it
      if (!instanceId) {
        instanceId = uuidv4();
        window.localStorage.setItem(keyName, instanceId);
      }

      // Set the instanceId in our webRTCConfig
      webRTCConfig.instanceId = instanceId;
    }

    // If no username passed, use the user details to fetch them
    if (!webRTCConfig.username || !webRTCConfig.password) {
      // Get the customers this user has access to
      const customers = await this.customers.get();
      if (!customers || customers.items.length === 0) {
        throw new Error('This user does not have access to any customers');
      }

      // Default to the first customer in the list
      let customer = customers.items[0];

      // If a customerId is specified, see if that customer exists in the list
      if (config.customerId) {
        const chosenCustomer = customers.items.find(
          (x: any) => x.id === `${config.customerId}`,
        );

        // If it is in the list, use it
        if (chosenCustomer) {
          customer = chosenCustomer;
        }
      }

      let { extensionId } = config;

      if (!extensionId) {
        // Get this user's linkedUser on this customer
        const linkedUser = await customer.linkedusers.get('me');

        if (!linkedUser) {
          throw new Error(
            `No linkedUser found for this user on this customer (${customer.id})`,
          );
        }

        // Get the linkedUser's defaultExtension
        const { defaultExtension } = linkedUser;

        if (!defaultExtension) {
          throw new Error(
            `No default extension set on linkedUser (${linkedUser.id}) on customer (${customer.id})`,
          );
        }

        extensionId = defaultExtension;
      }

      // Fetch the default extension
      const extension = await customer.phones.get(extensionId);

      if (!extension) {
        throw new Error(`Extension with id ${extensionId} not found`);
      }

      // Fetch the default extension's sip credentials
      const sipIdentity = await extension.sip.get();

      if (sipIdentity) {
        // Set the sip credentials in our webRTCConfig
        webRTCConfig.username = sipIdentity.username;
        webRTCConfig.password = sipIdentity.password;
      }
    }

    return instantiateWebRTC(webRTCConfig as WebRTCConfig, modules);
  }

  // eslint-disable-next-line class-methods-use-this
  _paramsForType = (type: ApiItemType) => {
    const params: RepresentationTypeParams = {};
    const normalizedType = type.toLowerCase();

    switch (normalizedType) {
      case 'phone':
      case 'virtual':
      case 'group':
      case 'queue':
      case 'ivr':
      case 'mailbox':
        params.type = type;
        break;
      case 'prompt':
      case 'music':
        params.type = type;
        break;
      default:
        break;
    }

    return params;
  };

  _objectFromItem = <T extends ApiItem>(
    item: T | Omit<T, 'id'>,
    parent: RepresentationBase | string,
  ): RepresentationType<T> & T => {
    // Figure out which class to use for this type

    switch (item.type) {
      // /* eslint no-use-before-define: 0 */
      // case 'availablebundle':
      //   return new Availablebundle(this, item, parent);
      case 'billingaccount':
        return new BillingAccountRepresentation(
          this,
          item as any,
          parent,
        ) as any;
      // case 'call':
      //   return new Call(this, item, parent);
      // case 'callbundle':
      //   return new Callbundle(this, item, parent);
      // case 'creditstatus':
      //   return new Creditstatus(this, item, parent);
      case 'customer':
        return new CustomerRepresentation(this, item as any) as any;
      // case 'did':
      //   return new Phonenumber(this, item, parent);
      // case 'forwardingrule':
      //   return new Forwardingrule(this, item, parent);
      // case 'group':
      //   return new Group(this, item, parent);
      // case 'invoice':
      //   return new Invoice(this, item, parent);
      // case 'ivr':
      //   return new Ivr(this, item, parent);
      // case 'linkeduser':
      //   return new Linkeduser(this, item, parent);
      // case 'mailbox':
      //   return new Mailbox(this, item, parent);
      // case 'music':
      //   return new Music(this, item, parent);
      case 'outgoingcallerid':
        return new OutgoingCallerIdRepresentation(
          this,
          item as any,
          parent,
        ) as any;
      // FIXME
      // case 'paymentmethod':
      // case 'worldpay':
      //   return new Paymentmethod(this, item, parent);
      case 'phone':
        return new PhoneRepresentation(this, item as any, parent) as any;
      // case 'phonebookentry':
      //   return new Phonebookentry(this, item, parent);
      // case 'prompt':
      //   return new Prompt(this, item, parent);
      // case 'preference':
      //   return new Preference(this, item, parent);
      case 'queue':
        return new QueueRepresentation(this, item as any, parent) as any;
      // case 'queueentry':
      //   return new Queueentry(this, item, parent);
      // case 'queuemembership':
      //   return new Queuemembership(this, item, parent);
      // case 'queuestatus':
      //   return new Queuestatus(this, item, parent);
      case 'recording':
        return new RecordingRepresentation(this, item as any, parent) as any;
      // case 'routingrule':
      //   return new Routingrule(this, item, parent);
      case 'smsmessage':
        return new SmsMessageRepresentation(this, item as any, parent) as any;
      case 'sipidentity':
        return new SipIdentityRepresentation(this, item as any, parent) as any;
      // case 'sipregistration':
      //   return new Sipregistration(this, item, parent);
      // case 'timeinterval':
      //   return new Timeinterval(this, item, parent);
      // case 'virtual':
      //   return new Virtual(this, item, parent);
      default:
        return new Representation<T>(
          this,
          item.type,
          item as any,
          parent,
        ) as any;
    }
  };

  _request = <Item extends ApiItem>(
    method: string,
    url: string,
    params = {},
    callback?: Callback,
  ) => {
    /* eslint no-param-reassign:0 */

    // Normalize method
    method = method.toLowerCase();

    if (typeof params === 'function') {
      callback = params as Callback;
      params = null;
    }

    /**
     * Filter out properties which shouldn't be sent back to the server in
     * the json body. This won't affect query params
     */
    const json: any = Object.entries(params)
      .filter(
        ([key, property]) =>
          key.charAt(0) !== '_' &&
          key !== 'client' &&
          key !== 'parent' &&
          !(property instanceof Representation) &&
          !(property instanceof RepresentationList),
      )
      .reduce(
        (a, [key, value]) => ({
          ...a,
          [key]: value,
        }),
        {},
      );

    // Since I made type private...
    if (params) {
      json.type = (params as any).type;
    }

    const fetchRequestOptions: RequestInit = {
      ...this.options.requestOptions,
      method,
      headers: this.getHeaders(),
    };
    if (
      method.toLowerCase() !== 'get' &&
      method.toLowerCase() !== 'head' &&
      Object.keys(json).length > 0
    ) {
      fetchRequestOptions.body = JSON.stringify(json);
    }

    return nodeify(
      fetch(url, fetchRequestOptions)
        .then((response) => {
          if (!response.ok) {
            // TODO better errors?
            throw new Error(`Error fetching resource: ${response.status}`);
          }
          return Promise.all([response.json(), response]);
        })
        .then(([data, response]) => {
          let parsedData;

          if (data && typeof data === 'string') {
            try {
              // If we've got data, and it's a string, try to parse it as JSON
              parsedData = JSON.parse(data);
            } catch (parseError) {
              // If we can't parse it, reject

              throw new Error('Error parsing JSON.');
            }
          } else {
            parsedData = data;
          }

          if (parsedData && typeof parsedData.errors !== 'undefined') {
            // If there are some errors returned, reject
            // TODO better errors
            // -> look at original 56e46f682c24fd21f2ad8a01ef380e31eb5ec007
            throw new Error(`Api error: ${parsedData.errors}`);
          }
          this._updateRateLimits(response);

          return { parsedData, response } as {
            parsedData: Item | ApiList<Item>;
            response: Response;
          };
        }),
      callback,
    );
  };

  _buildUrl = (
    type: ApiItemType,
    object: RepresentationBase,
    ...args: any[]
  ) => {
    let url;
    let id;
    let params: QueryParams = {};

    args.forEach((arg) => {
      switch (typeof arg) {
        case 'string':
        case 'number':
          id = arg;
          break;
        case 'object':
          params = arg;
          break;
        default:
          break;
      }
    });

    extend(params, this._paramsForType(type));

    url = this._buildUrlSection(type, object);
    url += typeof id !== 'undefined' ? `${id}/` : '';
    url +=
      Object.keys(params).length > 0 ? this._paramsToQueryString(params) : '';

    return url;
  };

  _buildUrlSection = (type: string, object: RepresentationBase, url = '') => {
    /* eslint no-param-reassign:0 */

    let path;
    const baseUrl = this.options.restBase;

    if (object.parent) {
      if (typeof object.parent === 'string') {
        // TODO
        path = urlPathForItemType(type, '');
        if (!path.startsWith('/')) {
          path = `/${path}`;
        }
        if (!path.endsWith('/')) {
          path = `${path}/`;
        }
        url = object.parent + path + url;
      } else {
        path = urlPathForItemType(type, object.parent.id);

        url = (path ? `${path}/` : '') + url;
        url = this._buildUrlSection(object.parent.type, object.parent, url);
      }
    } else {
      path = urlPathForItemType(type);

      url = baseUrl + (path ? `${path}/` : '') + (url || '');
    }

    return url;
  };

  // eslint-disable-next-line class-methods-use-this
  _paramsToQueryString = (params: QueryParams | string) => {
    if (typeof params === 'object') {
      const string = Object.keys(params).reduce((prev, key, index) => {
        let startChar = '&';

        if (index === 0) {
          startChar = '?';
        }

        return `${prev}${startChar}${key}=${params[key]}`;
      }, '');

      return string;
    }
    if (typeof params === 'string') {
      return params;
    }

    return '';
  };

  // _formatGetResponse<Item extends ApiItem>(
  //   response: Item,
  //   parent: RepresentationBase | string,
  // ): RepresentationType<Item>;
  // _formatGetResponse<Item extends ApiItem>(
  //   response: ApiList<Item>,
  //   parent: RepresentationBase | string,
  // ): FormattedApiList<Item>;
  _formatGetResponse = <Item extends ApiItem>(
    response: Item | ApiList<Item>,
    parent: RepresentationBase | string,
  ) => {
    if (!isApiItem(response)) {
      const builtItems = response.items
        ? response.items.map((item) => this._objectFromItem<Item>(item, parent))
        : [];

      const { nextPage, prevPage, items, ...temp } = response;
      const meta: FormattedApiListMetadata = temp;

      if (Object.prototype.hasOwnProperty.call(response, 'nextPage')) {
        const nextPageUrl = response.nextPage;
        meta.nextPage = (callback) =>
          nodeify(
            this._request('get', nextPageUrl).then((data) => {
              const formattedResponse: any = this._formatGetResponse(
                data.parsedData as ApiList<Item>,
                parent,
              );
              formattedResponse._response = data.response;
              return formattedResponse;
            }),
            callback,
          );
      }

      if (Object.prototype.hasOwnProperty.call(response, 'prevPage')) {
        const prevPageUrl = response.prevPage;
        meta.prevPage = (callback) =>
          nodeify(
            this._request('get', prevPageUrl).then((data) => {
              const formattedResponse: any = this._formatGetResponse(
                data.parsedData as ApiList<Item>,
                parent,
              );
              formattedResponse._response = data.response;
              return formattedResponse;
            }),
            callback,
          );
      }

      return { meta, items: builtItems };
    }
    return this._objectFromItem<Item>(response, parent);
  };

  _getResource = <Item extends ApiItem>(
    type: Item['type'],
    object: RepresentationBase,
    ...args: any[]
  ): Promise<(RepresentationType<Item> & Item) | FormattedApiList<Item>> => {
    let id: string;
    let params: QueryParams;
    let callback: Callback;

    args.forEach((arg) => {
      switch (typeof arg) {
        case 'string':
        case 'number':
          id = String(arg);
          break;
        case 'object':
          params = arg;
          break;
        case 'function':
          callback = arg;
          break;
        default:
          break;
      }
    });

    const url = this._buildUrl(type, object, id, params);

    return nodeify(
      this._request<Item>('get', url).then((data) => {
        const formattedResponse = this._formatGetResponse(
          data.parsedData,
          object.parent,
        );

        return formattedResponse;
      }),
      callback,
    );
  };

  _saveRepresentation = <Item extends ApiItem>(
    object: Representation<Item>,
    callback: Callback,
  ) => {
    const url = this._buildUrl(object.type, object, object.id);
    const requestMethod = object.id ? 'put' : 'post';

    return nodeify(
      this._request(requestMethod, url, object).then((data) => {
        // Update our object with the newly returned propreties
        object.extend(data.parsedData as Item);
        const resolveData = {
          ...(data.parsedData as Item),
          _response: data.response,
        };
        return resolveData;
      }),
      callback,
    );
  };

  _deleteRepresentation = <Item extends ApiItem>(
    object: Representation<Item>,
    callback: Callback,
  ) => {
    const url = this._buildUrl(object.type, object, object.id);
    return nodeify(this._request('delete', url, object), callback).then(
      (data) => {
        const resolveData = {
          ...(data.parsedData as Item),
          _response: data.response,
        };

        return resolveData;
      },
    );
  };
}

export default Sipcentric;
