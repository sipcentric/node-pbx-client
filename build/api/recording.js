"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const representation_1 = __importDefault(require("./representation"));
class Recording extends representation_1.default {
    constructor(client, properties, parent) {
        super(client, properties, parent);
        this._type = 'recording';
        this._unavailableMethods = ['save'];
        this._unavailableMethods.forEach((method) => delete this[method]);
    }
}
exports.default = Recording;
