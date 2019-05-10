"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const representation_1 = __importDefault(require("./representation"));
const routingruleList_1 = __importDefault(require("./routingruleList"));
class Phonenumber extends representation_1.default {
    constructor(client, properties, parent) {
        super(client, properties, parent);
        this._type = 'phonenumber';
        this.routingrules = new routingruleList_1.default(this.client, this);
    }
}
exports.default = Phonenumber;
