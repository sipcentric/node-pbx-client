"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const representation_1 = __importDefault(require("./representation"));
const forwardingruleList_1 = __importDefault(require("./forwardingruleList"));
const sipidentityList_1 = __importDefault(require("./sipidentityList"));
class Phone extends representation_1.default {
    constructor(client, properties, parent) {
        super(client, properties, parent);
        this._type = 'phone';
        this.sip = new sipidentityList_1.default(this.client, this);
        this.forwardingrules = new forwardingruleList_1.default(this.client, this);
    }
}
exports.default = Phone;
