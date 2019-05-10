"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const representationList_1 = __importDefault(require("./representationList"));
class CustomerList extends representationList_1.default {
    constructor(client) {
        super(client);
        this._type = 'customerList';
        this._itemType = 'customer';
    }
}
exports.default = CustomerList;
