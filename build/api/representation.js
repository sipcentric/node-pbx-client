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
Object.defineProperty(exports, "__esModule", { value: true });
const extend = require("deep-extend");
class Representation {
    get type() {
        return this._type;
    }
    constructor(client, properties, parent) {
        this.client = client;
        if (properties) {
            const { type } = properties, props = __rest(properties, ["type"]);
            extend(this, props);
        }
        this.parent = parent;
        this._type = 'none';
    }
    save(callback) {
        return this.client._saveRepresentation(this, callback);
    }
    delete(callback) {
        return this.client._deleteRepresentation(this, callback);
    }
}
exports.default = Representation;
