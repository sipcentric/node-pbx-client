"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const representation_1 = __importDefault(require("./representation"));
const queueentryList_1 = __importDefault(require("./queueentryList"));
const queuemembershipList_1 = __importDefault(require("./queuemembershipList"));
const queuestatusList_1 = __importDefault(require("./queuestatusList"));
class Queue extends representation_1.default {
    constructor(client, properties, parent) {
        super(client, properties, parent);
        this._type = 'queue';
        this.entries = new queueentryList_1.default(this.client, this);
        this.memberships = new queuemembershipList_1.default(this.client, this);
        this.status = new queuestatusList_1.default(this.client, this);
    }
}
exports.default = Queue;
