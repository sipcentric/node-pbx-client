import extend = require('deep-extend');
import { Base64 } from 'js-base64';

import Availablebundle from './availablebundle';
import Billingaccount from './billingaccount';
import Call from './call';
import Callbundle from './callbundle';
import Creditstatus from './creditstatus';
import Customer from './customer';
import CustomerList from './customerList';
import Forwardingrule from './forwardingrule';
import Group from './group';
import Invoice from './invoice';
import Ivr from './ivr';
import Linkeduser from './linkeduser';
import Mailbox from './mailbox';
import Music from './music';
import Outgoingcallerid from './outgoingcallerid';
import Paymentmethod from './paymentmethod';
import Phone from './phone';
import Phonebookentry from './phonebookentry';
import Phonenumber from './phonenumber';
import Preference from './preference';
// import PresenceWatcher from './presenceWatcher';
import Prompt from './prompt';
import Queue from './queue';
import Queueentry from './queueentry';
import Queuemembership from './queuemembership';
import Queuestatus from './queuestatus';
// import Stream from './stream';
import Recording from './recording';
import Routingrule from './routingrule';
import Sipidentity from './sipidentity';
import Sipregistration from './sipregistration';
import Smsmessage from './smsmessage';
import Timeinterval from './timeinterval';
import Virtual from './virtual';
import instantiateWebRTC from './webRTC';

import Representation from './representation';
import RepresentationList from './representationList';

// Promise + callback polyfill
import nodeify from '../polyfills/nodeifyv2';

// Package version
import * as npmPackage from '../../package.json';
import { isApiItem } from '../guards';
import {
  NimveloClient,
  ClientOptions,
  RepresentationTypeParams,
  ApiItem,
  RepresentationBase,
  Callback,
  QueryParams,
  FormattedApiList,
  ApiList,
  WebRTCConfig,
} from '../interfaces';

const VERSION: string = (npmPackage as any).version;

class Nimvelo implements NimveloClient {
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

  public customers: CustomerList;
  public stream: any;
  public presenceWatcher: any;

  constructor(options?: Partial<ClientOptions>) {
    this.VERSION = VERSION;
    this.rateLimit = {
      limit: 0,
      remaining: 0,
      reset: 0,
    };

    this.userAgent = `phone-api-client/v${VERSION}`;

    this.authPromise = Promise.resolve();

    this.init(options);
  }

  private static _getAuthHeader(username: string, password: string) {
    // Base64 encode without btoa()
    /* const encodedCredentials = new Buffer(`${username}:${password}`).toString(
      'base64',
    ); */
    const encodedCredentials = Base64.encode(`${username}:${password}`);
    return `Basic ${encodedCredentials}`;
  }

  private static _authenticate(
    username: string,
    password: string,
    authBase: string,
  ) {
    const authHeader = Nimvelo._getAuthHeader(username, password);
    const headers = {
      Authorization: authHeader,
      'X-WWW-Authenticate': 'false',
    };

    const method = 'POST';

    return fetch(authBase, {
      method,
      headers,
    }).then(async (res) => {
      if (res.status !== 200) {
        const text = await res.text();
        // TODO custom error type
        throw new Error(
          `Authentication failed with status code ${res.status}: ${text}`,
        );
      }
      // Authentication succeeded
      const json = await res.json();
      const { accessToken } = json;
      return accessToken as string;
    });
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
          this.authPromise = Nimvelo._authenticate(
            options.username,
            options.password,
            authBase,
          ).then((token) => {
            this.options.token = token;
            this.authorization = `Bearer ${token}`;
            return token;
          });
        } else {
          this.authorization = Nimvelo._getAuthHeader(
            options.username,
            options.password,
          );
          // Check if the username and password are correct
          this.authPromise = Nimvelo._authenticate(
            options.username,
            options.password,
            authBase,
          );
        }
      }
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
          headers: {
            Accept: 'application/json',
            Authorization: this.authorization,
            'Content-Type': 'application/json',
            'User-Agent': this.userAgent,
            'X-Relationship-Key': 'id',
          },
        },
      },
      options,
    );

    this.customers = new CustomerList(this);
    // this.stream = new Stream(this);
    // this.presenceWatcher = new PresenceWatcher(this);

    return this.authPromise;
  };

  public representationFromJson = (json: ApiItem) => {
    return this._objectFromItem(json, json.parent!);
  };

  _updateRateLimits = (response: Response) => {
    const { headers } = response;

    this.rateLimit = {
      limit: (headers as any)['x-ratelimit-limit'],
      remaining: (headers as any)['x-ratelimit-remaining'],
      reset: (headers as any)['x-ratelimit-reset'],
    };
  };

  // eslint-disable-next-line class-methods-use-this
  async getUA(config: Partial<WebRTCConfig>, modules: { [k: string]: any }) {
    const webRTCConfig = extend(
      {
        username: undefined,
        password: undefined,
        instanceId: undefined, // TODO Generate this, if need be
        register: false,
      },
      config,
    );

    // If no username passed, use the user details to fetch them
    if (!webRTCConfig.username) {
      // Get the customers this user has access to
      const customers = await this.customers.get();
      if (customers.items.length === 0) {
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

      // Fetch the default extension
      const extension = await customer.phones.get(defaultExtension);

      // Fetch the default extension's sip credentials
      const sipIdentity = await extension.sip.get();

      // Set the sip credentials in our webRTCConfig
      webRTCConfig.username = sipIdentity.username;
      webRTCConfig.password = sipIdentity.password;
    }

    return instantiateWebRTC(webRTCConfig, modules);
  }

  // eslint-disable-next-line class-methods-use-this
  _pathForType = (type: string, id?: string) => {
    let path = '';
    const normalizedType = type.toLowerCase();

    switch (normalizedType) {
      case 'availablebundle':
        path = `${id}/callbundles/available`;
        break;
      case 'billingaccount':
        path = `${id}/billing`;
        break;
      case 'creditstatus':
        path = `${id}/creditstatus`;
        break;
      case 'customers':
        // Use the default base REST URL
        break;
      case 'customer':
        path = id || '';
        break;
      case 'estimate':
        path = 'estimate';
        break;
      case 'phone':
      case 'virtual':
      case 'group':
      case 'queue':
      case 'ivr':
      case 'mailbox':
        path = `${id}/endpoints`;
        break;
      case 'invoice':
        path = 'invoices';
        break;
      case 'phonebookentry':
        path = `${id}/phonebook`;
        break;
      case 'paymentmethod':
        path = 'paymentmethods';
        break;
      case 'queueentry':
        path = `${id}/queueentries`;
        break;
      case 'queuemembership':
        path = `${id}/queuememberships`;
        break;
      case 'queuestatus':
        path = `${id}/queuestatus`;
        break;
      case 'sipidentity':
      case 'sipidentitylist':
        path = `${id}/sip`;
        break;
      case 'sipregistration':
        path = 'registrations';
        break;
      case 'smsmessage':
        path = `${id}/sms`;
        break;
      case 'sound':
      case 'prompt':
      case 'music':
        path = `${id}/sounds`;
        break;
      default:
        path = `${id}/${normalizedType}s`;
        break;
    }

    return path;
  };

  // eslint-disable-next-line class-methods-use-this
  _paramsForType = (type: string) => {
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

  _objectFromItem = (item: ApiItem, parent: RepresentationBase | string) => {
    if (
      typeof item === 'undefined' ||
      !Object.prototype.hasOwnProperty.call(item, 'type')
    ) {
      // FIXME is it okay?
      return null;
      // return item;
    }

    let object: Representation;

    // Figure out which class to use for this type

    switch (item.type) {
      /* eslint no-use-before-define: 0 */
      case 'availablebundle':
        object = new Availablebundle(this, item, parent);
        break;
      case 'billingaccount':
        object = new Billingaccount(this, item, parent);
        break;
      case 'call':
        object = new Call(this, item, parent);
        break;
      case 'callbundle':
        object = new Callbundle(this, item, parent);
        break;
      case 'creditstatus':
        object = new Creditstatus(this, item, parent);
        break;
      case 'customer':
        object = new Customer(this, item);
        break;
      case 'did':
        object = new Phonenumber(this, item, parent);
        break;
      case 'forwardingrule':
        object = new Forwardingrule(this, item, parent);
        break;
      case 'group':
        object = new Group(this, item, parent);
        break;
      case 'invoice':
        object = new Invoice(this, item, parent);
        break;
      case 'ivr':
        object = new Ivr(this, item, parent);
        break;
      case 'linkeduser':
        object = new Linkeduser(this, item, parent);
        break;
      case 'mailbox':
        object = new Mailbox(this, item, parent);
        break;
      case 'music':
        object = new Music(this, item, parent);
        break;
      case 'outgoingcallerid':
        object = new Outgoingcallerid(this, item, parent);
        break;
      case 'paymentmethod':
      case 'worldpay':
        object = new Paymentmethod(this, item, parent);
        break;
      case 'phone':
        object = new Phone(this, item, parent);
        break;
      case 'phonebookentry':
        object = new Phonebookentry(this, item, parent);
        break;
      case 'prompt':
        object = new Prompt(this, item, parent);
        break;
      case 'preference':
        object = new Preference(this, item, parent);
        break;
      case 'queue':
        object = new Queue(this, item, parent);
        break;
      case 'queueentry':
        object = new Queueentry(this, item, parent);
        break;
      case 'queuemembership':
        object = new Queuemembership(this, item, parent);
        break;
      case 'queuestatus':
        object = new Queuestatus(this, item, parent);
        break;
      case 'recording':
        object = new Recording(this, item, parent);
        break;
      case 'routingrule':
        object = new Routingrule(this, item, parent);
        break;
      case 'smsmessage':
        object = new Smsmessage(this, item, parent);
        break;
      case 'sipidentity':
        object = new Sipidentity(this, item, parent);
        break;
      case 'sipregistration':
        object = new Sipregistration(this, item, parent);
        break;
      case 'timeinterval':
        object = new Timeinterval(this, item, parent);
        break;
      case 'virtual':
        object = new Virtual(this, item, parent);
        break;
      default:
        object = new Representation(this, item, parent);
        break;
    }

    return object;
  };

  _buildObjects = (
    items: ApiItem | ApiItem[],
    parent: RepresentationBase | string,
  ) => {
    // Builds an array of class objects from a given array of items,
    // or returns a single class object if we only give it one object

    return Array.isArray(items)
      ? items.map((item) => this._objectFromItem(item, parent))
      : this._objectFromItem(items, parent);
  };

  _request = (
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
            throw new Error(`Api error: ${parsedData.errors}`);
          }
          this._updateRateLimits(response);

          return { parsedData, response } as {
            parsedData: ApiItem;
            response: Response;
          };
        }),
      callback,
    );
  };

  _buildUrl = (type: string, object: RepresentationBase, ...args: any[]) => {
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
        path = this._pathForType(type, '');
        if (!path.startsWith('/')) {
          path = `/${path}`;
        }
        if (!path.endsWith('/')) {
          path = `${path}/`;
        }
        url = object.parent + path + url;
      } else {
        path = this._pathForType(type, object.parent.id);

        url = (path ? `${path}/` : '') + url;
        url = this._buildUrlSection(object.parent.type, object.parent, url);
      }
    } else {
      path = this._pathForType(type);

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

  _formatGetResponse = (
    response: ApiItem | ApiList<ApiItem>,
    parent: RepresentationBase | string,
  ) => {
    if (!isApiItem(response)) {
      const builtItems = this._buildObjects(response.items, parent);

      const { nextPage, prevPage, items, ...temp } = response;
      const meta: FormattedApiList = temp;

      if (Object.prototype.hasOwnProperty.call(response, 'nextPage')) {
        const nextPageUrl = response.nextPage;
        meta.nextPage = (callback) =>
          nodeify(
            this._request('get', nextPageUrl).then((data) => {
              const formattedResponse: any = this._formatGetResponse(
                data.parsedData,
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
                data.parsedData,
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

    return this._buildObjects(response, parent);
  };

  _getResource = (type: string, object: RepresentationBase, ...args: any[]) => {
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
      this._request('get', url).then((data) => {
        const formattedResponse = this._formatGetResponse(
          data.parsedData,
          object.parent,
        );

        return formattedResponse;
      }),
      callback,
    );
  };

  _saveRepresentation = (object: Representation, callback: Callback) => {
    const url = this._buildUrl(object.type, object, object.id);
    const requestMethod = object.id ? 'put' : 'post';

    return nodeify(
      this._request(requestMethod, url, object).then((data) => {
        // Update our object with the newly returned propreties
        object.extend(data.parsedData);
        const resolveData = {
          ...data.parsedData,
          _response: data.response,
        };
        return resolveData;
      }),
      callback,
    );
  };

  _deleteRepresentation = (object: Representation, callback: Callback) => {
    const url = this._buildUrl(object.type, object, object.id);
    return nodeify(this._request('delete', url, object), callback).then(
      (data) => {
        const resolveData = {
          ...data.parsedData,
          _response: data.response,
        };

        return resolveData;
      },
    );
  };
}

export default Nimvelo;
