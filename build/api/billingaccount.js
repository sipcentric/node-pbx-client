"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const representation_1 = __importDefault(require("./representation"));
const estimateList_1 = __importDefault(require("./estimateList"));
const invoiceList_1 = __importDefault(require("./invoiceList"));
const paymentmethodList_1 = __importDefault(require("./paymentmethodList"));
class Billingaccount extends representation_1.default {
    constructor(client, properties, parent) {
        super(client, properties, parent);
        this._type = 'billingaccount';
        this.invoices = new invoiceList_1.default(this.client, this);
        this.estimate = new estimateList_1.default(this.client, this);
        this.paymentmethods = new paymentmethodList_1.default(this.client, this);
    }
}
exports.default = Billingaccount;
