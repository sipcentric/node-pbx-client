"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const extend = require("deep-extend");
const representation_1 = __importDefault(require("./representation"));
const availablebundleList_1 = __importDefault(require("./availablebundleList"));
const billingaccountList_1 = __importDefault(require("./billingaccountList"));
const callList_1 = __importDefault(require("./callList"));
const call_1 = __importDefault(require("./call"));
const callbundleList_1 = __importDefault(require("./callbundleList"));
const creditstatusList_1 = __importDefault(require("./creditstatusList"));
const endpointList_1 = __importDefault(require("./endpointList"));
const groupList_1 = __importDefault(require("./groupList"));
const group_1 = __importDefault(require("./group"));
const ivrList_1 = __importDefault(require("./ivrList"));
const ivr_1 = __importDefault(require("./ivr"));
const mailboxList_1 = __importDefault(require("./mailboxList"));
const mailbox_1 = __importDefault(require("./mailbox"));
const musicList_1 = __importDefault(require("./musicList"));
const music_1 = __importDefault(require("./music"));
const outgoingcalleridList_1 = __importDefault(require("./outgoingcalleridList"));
const phoneList_1 = __importDefault(require("./phoneList"));
const phone_1 = __importDefault(require("./phone"));
const phonebookentryList_1 = __importDefault(require("./phonebookentryList"));
const phonebookentry_1 = __importDefault(require("./phonebookentry"));
const phonenumberList_1 = __importDefault(require("./phonenumberList"));
const promptList_1 = __importDefault(require("./promptList"));
const prompt_1 = __importDefault(require("./prompt"));
const preferenceList_1 = __importDefault(require("./preferenceList"));
const queueList_1 = __importDefault(require("./queueList"));
const queue_1 = __importDefault(require("./queue"));
const recordingList_1 = __importDefault(require("./recordingList"));
const smsmessageList_1 = __importDefault(require("./smsmessageList"));
const smsmessage_1 = __importDefault(require("./smsmessage"));
const soundList_1 = __importDefault(require("./soundList"));
const timeintervalList_1 = __importDefault(require("./timeintervalList"));
const timeinterval_1 = __importDefault(require("./timeinterval"));
const virtualList_1 = __importDefault(require("./virtualList"));
const virtual_1 = __importDefault(require("./virtual"));
class Customer extends representation_1.default {
    constructor(client, item) {
        super(client);
        const { type } = item, rest = __rest(item, ["type"]);
        extend(this, rest);
        this._type = 'customer';
        this.availablebundles = new availablebundleList_1.default(this.client, this);
        this.billing = new billingaccountList_1.default(this.client, this);
        this.calls = new callList_1.default(this.client, this);
        this.callbundles = new callbundleList_1.default(this.client, this);
        this.creditstatus = new creditstatusList_1.default(this.client, this);
        this.endpoints = new endpointList_1.default(this.client, this);
        this.groups = new groupList_1.default(this.client, this);
        this.ivrs = new ivrList_1.default(this.client, this);
        this.mailboxes = new mailboxList_1.default(this.client, this);
        this.music = new musicList_1.default(this.client, this);
        this.outgoingcallerids = new outgoingcalleridList_1.default(this.client, this);
        this.phones = new phoneList_1.default(this.client, this);
        this.phonebook = new phonebookentryList_1.default(this.client, this);
        this.phonenumbers = new phonenumberList_1.default(this.client, this);
        this.prompts = new promptList_1.default(this.client, this);
        this.preferences = new preferenceList_1.default(this.client, this);
        this.queues = new queueList_1.default(this.client, this);
        this.recordings = new recordingList_1.default(this.client, this);
        this.smsmessages = new smsmessageList_1.default(this.client, this);
        this.sounds = new soundList_1.default(this.client, this);
        this.timeintervals = new timeintervalList_1.default(this.client, this);
        this.virtuals = new virtualList_1.default(this.client, this);
        this._unavailableMethods = ['delete'];
        this._unavailableMethods.forEach((method) => delete this[method]);
    }
    create(type, properties) {
        // Figure out which class to use for this type
        switch (type) {
            case 'call':
                return new call_1.default(this.client, properties, this);
            case 'group':
                return new group_1.default(this.client, properties, this);
            case 'ivr':
                return new ivr_1.default(this.client, properties, this);
            case 'mailbox':
                return new mailbox_1.default(this.client, properties, this);
            case 'music':
                return new music_1.default(this.client, properties, this);
            case 'phone':
                return new phone_1.default(this.client, properties, this);
            case 'phonebookentry':
                return new phonebookentry_1.default(this.client, properties, this);
            case 'prompt':
                return new prompt_1.default(this.client, properties, this);
            case 'queue':
                return new queue_1.default(this.client, properties, this);
            case 'smsmessage':
                return new smsmessage_1.default(this.client, properties, this);
            case 'timeinterval':
                return new timeinterval_1.default(this.client, properties, this);
            case 'virtual':
                return new virtual_1.default(this.client, properties, this);
            default:
                return false;
        }
    }
}
exports.default = Customer;
