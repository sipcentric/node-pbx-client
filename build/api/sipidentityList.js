"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const representationList_1 = __importDefault(require("./representationList"));
const sipregistrationList_1 = __importDefault(require("./sipregistrationList"));
class SipidentityList extends representationList_1.default {
    constructor(client, parent) {
        super(client, parent);
        this._type = 'sipidentityList';
        this._itemType = 'sipidentity';
        // A shortcut to get registrations without getting sipidentity first
        this.registrations = new sipregistrationList_1.default(this.client, this);
    }
}
exports.default = SipidentityList;
