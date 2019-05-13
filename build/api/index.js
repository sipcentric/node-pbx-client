"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const extend = require("deep-extend");
const js_base64_1 = require("js-base64");
const availablebundle_1 = __importDefault(require("./availablebundle"));
const billingaccount_1 = __importDefault(require("./billingaccount"));
const call_1 = __importDefault(require("./call"));
const callbundle_1 = __importDefault(require("./callbundle"));
const creditstatus_1 = __importDefault(require("./creditstatus"));
const customer_1 = __importDefault(require("./customer"));
const customerList_1 = __importDefault(require("./customerList"));
const forwardingrule_1 = __importDefault(require("./forwardingrule"));
const group_1 = __importDefault(require("./group"));
const invoice_1 = __importDefault(require("./invoice"));
const ivr_1 = __importDefault(require("./ivr"));
const mailbox_1 = __importDefault(require("./mailbox"));
const music_1 = __importDefault(require("./music"));
const outgoingcallerid_1 = __importDefault(require("./outgoingcallerid"));
const paymentmethod_1 = __importDefault(require("./paymentmethod"));
const phone_1 = __importDefault(require("./phone"));
const phonebookentry_1 = __importDefault(require("./phonebookentry"));
const phonenumber_1 = __importDefault(require("./phonenumber"));
const preference_1 = __importDefault(require("./preference"));
// import PresenceWatcher from './presenceWatcher';
const prompt_1 = __importDefault(require("./prompt"));
const queue_1 = __importDefault(require("./queue"));
const queueentry_1 = __importDefault(require("./queueentry"));
const queuemembership_1 = __importDefault(require("./queuemembership"));
const queuestatus_1 = __importDefault(require("./queuestatus"));
// import Stream from './stream';
const recording_1 = __importDefault(require("./recording"));
const routingrule_1 = __importDefault(require("./routingrule"));
const sipidentity_1 = __importDefault(require("./sipidentity"));
const sipregistration_1 = __importDefault(require("./sipregistration"));
const smsmessage_1 = __importDefault(require("./smsmessage"));
const timeinterval_1 = __importDefault(require("./timeinterval"));
const virtual_1 = __importDefault(require("./virtual"));
const representation_1 = __importDefault(require("./representation"));
const representationList_1 = __importDefault(require("./representationList"));
// Promise + callback polyfill
const nodeifyv2_1 = __importDefault(require("../polyfills/nodeifyv2"));
// Package version
const npmPackage = __importStar(require("../../package.json"));
const guards_1 = require("../guards");
const VERSION = npmPackage.version;
class Nimvelo {
    constructor(options) {
        this.VERSION = VERSION;
        this.authPromise = Promise.resolve();
        this.init(options);
    }
    static _getAuthHeader(username, password) {
        // Base64 encode without btoa()
        /* const encodedCredentials = new Buffer(`${username}:${password}`).toString(
          'base64',
        ); */
        const encodedCredentials = js_base64_1.Base64.encode(`${username}:${password}`);
        return `Basic ${encodedCredentials}`;
    }
    static _authenticate(username, password, apiRoot) {
        const authHeader = Nimvelo._getAuthHeader(username, password);
        const headers = {
            Authorization: authHeader,
            'X-WWW-Authenticate': 'false',
        };
        const method = 'POST';
        return fetch(`${apiRoot}/authenticate/`, {
            method,
            headers,
        }).then((res) => __awaiter(this, void 0, void 0, function* () {
            if (res.status !== 200) {
                const text = yield res.text();
                // TODO custom error type
                throw new Error(`Authentication failed with status code ${res.status}: ${text}`);
            }
            // Authentication succeeded
            const json = yield res.json();
            const { accessToken } = json;
            return accessToken;
        }));
    }
    getHeaders() {
        return Object.assign({}, this.options.requestOptions.headers, { Authorization: this.authorization });
    }
    init(options) {
        const restBase = (options && options.restBase) ||
            'https://pbx.sipcentric.com/api/v1/customers/';
        // TODO handle refreshing tokens?
        if (typeof options !== 'undefined') {
            if (Object.prototype.hasOwnProperty.call(options, 'token')) {
                this.authorization = `Bearer ${this.options.token}`;
            }
            else if (Object.prototype.hasOwnProperty.call(options, 'username') &&
                Object.prototype.hasOwnProperty.call(options, 'password')) {
                if (options.auth === 'token') {
                    this.authPromise = Nimvelo._authenticate(options.username, options.password, restBase).then((token) => {
                        this.options.token = token;
                        this.authorization = `Bearer ${token}`;
                    });
                }
                else {
                    this.authorization = Nimvelo._getAuthHeader(options.username, options.password);
                }
            }
        }
        // Merge the default options with the client submitted options
        this.options = extend({
            username: null,
            password: null,
            customer: 'me',
            auth: 'basic',
            restBase: 'https://pbx.sipcentric.com/api/v1/customers/',
            streamBase: 'https://pbx.sipcentric.com/api/v1/stream',
            json: true,
            requestOptions: {
                headers: {
                    Accept: 'application/json',
                    Authorization: this.authorization,
                    'Content-Type': 'application/json',
                    'User-Agent': `node-nimvelo/${VERSION}`,
                    'X-Relationship-Key': 'id',
                },
            },
        }, options);
        this.customers = new customerList_1.default(this);
        // this.stream = new Stream(this);
        // this.presenceWatcher = new PresenceWatcher(this);
        return this.authPromise;
    }
    // eslint-disable-next-line class-methods-use-this
    _pathForType(type, id) {
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
    }
    // eslint-disable-next-line class-methods-use-this
    _paramsForType(type) {
        const params = {};
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
    }
    _objectFromItem(item, parent) {
        if (typeof item === 'undefined' ||
            !Object.prototype.hasOwnProperty.call(item, 'type')) {
            // FIXME is it okay?
            return null;
            // return item;
        }
        let object;
        // Figure out which class to use for this type
        switch (item.type) {
            /* eslint no-use-before-define: 0 */
            case 'availablebundle':
                object = new availablebundle_1.default(this, item, parent);
                break;
            case 'billingaccount':
                object = new billingaccount_1.default(this, item, parent);
                break;
            case 'call':
                object = new call_1.default(this, item, parent);
                break;
            case 'callbundle':
                object = new callbundle_1.default(this, item, parent);
                break;
            case 'creditstatus':
                object = new creditstatus_1.default(this, item, parent);
                break;
            case 'customer':
                object = new customer_1.default(this, item);
                break;
            case 'did':
                object = new phonenumber_1.default(this, item, parent);
                break;
            case 'forwardingrule':
                object = new forwardingrule_1.default(this, item, parent);
                break;
            case 'group':
                object = new group_1.default(this, item, parent);
                break;
            case 'invoice':
                object = new invoice_1.default(this, item, parent);
                break;
            case 'ivr':
                object = new ivr_1.default(this, item, parent);
                break;
            case 'mailbox':
                object = new mailbox_1.default(this, item, parent);
                break;
            case 'music':
                object = new music_1.default(this, item, parent);
                break;
            case 'outgoingcallerid':
                object = new outgoingcallerid_1.default(this, item, parent);
                break;
            case 'paymentmethod':
            case 'worldpay':
                object = new paymentmethod_1.default(this, item, parent);
                break;
            case 'phone':
                object = new phone_1.default(this, item, parent);
                break;
            case 'phonebookentry':
                object = new phonebookentry_1.default(this, item, parent);
                break;
            case 'prompt':
                object = new prompt_1.default(this, item, parent);
                break;
            case 'preference':
                object = new preference_1.default(this, item, parent);
                break;
            case 'queue':
                object = new queue_1.default(this, item, parent);
                break;
            case 'queueentry':
                object = new queueentry_1.default(this, item, parent);
                break;
            case 'queuemembership':
                object = new queuemembership_1.default(this, item, parent);
                break;
            case 'queuestatus':
                object = new queuestatus_1.default(this, item, parent);
                break;
            case 'recording':
                object = new recording_1.default(this, item, parent);
                break;
            case 'routingrule':
                object = new routingrule_1.default(this, item, parent);
                break;
            case 'smsmessage':
                object = new smsmessage_1.default(this, item, parent);
                break;
            case 'sipidentity':
                object = new sipidentity_1.default(this, item, parent);
                break;
            case 'sipregistration':
                object = new sipregistration_1.default(this, item, parent);
                break;
            case 'timeinterval':
                object = new timeinterval_1.default(this, item, parent);
                break;
            case 'virtual':
                object = new virtual_1.default(this, item, parent);
                break;
            default:
                object = new representation_1.default(this, item, parent);
                break;
        }
        return object;
    }
    _buildObjects(items, parent) {
        // Builds an array of class objects from a given array of items,
        // or returns a single class object if we only give it one object
        return Array.isArray(items)
            ? items.map((item) => this._objectFromItem(item, parent))
            : this._objectFromItem(items, parent);
    }
    _request(method, url, params = {}, callback) {
        /* eslint no-param-reassign:0 */
        // Normalize method
        method = method.toLowerCase();
        if (typeof params === 'function') {
            callback = params;
            params = null;
        }
        /**
         * Filter out properties which shouldn't be sent back to the server in
         * the json body. This won't affect query params
         */
        const json = Object.entries(params)
            .filter(([key, property]) => key.charAt(0) !== '_' &&
            key !== 'client' &&
            key !== 'parent' &&
            !(property instanceof representation_1.default) &&
            !(property instanceof representationList_1.default))
            .reduce((a, [key, value]) => (Object.assign({}, a, { [key]: value })), {});
        return nodeifyv2_1.default(fetch(url, Object.assign({}, this.options.requestOptions, { method, headers: this.getHeaders(), body: JSON.stringify(json) }))
            .then((response) => {
            if (!response.ok) {
                // TODO better errors?
                throw new Error(`Error fetching resource: ${response.status}`);
            }
            return response.json();
        })
            .then((data) => {
            let parsedData;
            if (data && typeof data === 'string') {
                try {
                    // If we've got data, and it's a string, try to parse it as JSON
                    parsedData = JSON.parse(data);
                }
                catch (parseError) {
                    // If we can't parse it, reject
                    throw new Error('Error parsing JSON.');
                }
            }
            else {
                parsedData = data;
            }
            if (parsedData && typeof parsedData.errors !== 'undefined') {
                // If there are some errors returned, reject
                // TODO better errors
                throw new Error(`Api error: ${parsedData.errors}`);
            }
            return parsedData;
        }), callback);
    }
    _buildUrl(type, object, ...args) {
        let url;
        let id;
        let params = {};
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
    }
    _buildUrlSection(type, object, url = '') {
        /* eslint no-param-reassign:0 */
        let path;
        const baseUrl = this.options.restBase;
        if (object.parent) {
            path = this._pathForType(type, object.parent.id);
            url = (path ? `${path}/` : '') + url;
            url = this._buildUrlSection(object.parent.type, object.parent, url);
        }
        else {
            path = this._pathForType(type);
            url = baseUrl + (path ? `${path}/` : '') + (url || '');
        }
        return url;
    }
    // eslint-disable-next-line class-methods-use-this
    _paramsToQueryString(params) {
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
    }
    _formatGetResponse(response, parent) {
        if (!guards_1.isApiItem(response)) {
            const items = this._buildObjects(response.items, parent);
            const { nextPage, prevPage } = response, temp = __rest(response, ["nextPage", "prevPage"]);
            const meta = temp;
            if (Object.prototype.hasOwnProperty.call(response, 'nextPage')) {
                const nextPageUrl = response.nextPage;
                meta.nextPage = (callback) => nodeifyv2_1.default(this._request('get', nextPageUrl).then((data) => {
                    return this._formatGetResponse(data, parent);
                }), callback);
            }
            if (Object.prototype.hasOwnProperty.call(response, 'prevPage')) {
                const prevPageUrl = response.prevPage;
                meta.prevPage = (callback) => nodeifyv2_1.default(this._request('get', prevPageUrl).then((data) => {
                    return this._formatGetResponse(data, parent);
                }), callback);
            }
            return { meta, items };
        }
        return this._buildObjects(response, parent);
    }
    _getResource(type, object, ...args) {
        let id;
        let params;
        let callback;
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
        return nodeifyv2_1.default(this._request('get', url).then((data) => {
            const formattedResponse = this._formatGetResponse(data, object.parent);
            return formattedResponse;
        }), callback);
    }
    _saveRepresentation(object, callback) {
        const url = this._buildUrl(object.type, object, object.id);
        const requestMethod = object.id ? 'put' : 'post';
        return nodeifyv2_1.default(this._request(requestMethod, url, object).then((data) => {
            // Update our object with the newly returned propreties
            extend(object, data);
            return data;
        }), callback);
    }
    _deleteRepresentation(object, callback) {
        const url = this._buildUrl(object.type, object, object.id);
        return nodeifyv2_1.default(this._request('delete', url, object), callback);
    }
}
exports.default = Nimvelo;
