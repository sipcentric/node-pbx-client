"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const representationList_1 = __importDefault(require("./representationList"));
class InvoiceList extends representationList_1.default {
    constructor(client, parent) {
        super(client, parent);
        this._type = 'invoiceList';
        this._itemType = 'invoice';
    }
}
exports.default = InvoiceList;
