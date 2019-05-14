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
class RepresentationList {
    constructor(client, parent) {
        this.get = (id, params, callback) => {
            return this.client._getResource(this.itemType, this, id, params, callback);
        };
        this.create = (properties = {}) => {
            // Make sure the type is correct, and it has no ID
            const _a = properties, { id } = _a, rest = __rest(_a, ["id"]);
            const sanitizedProperties = Object.assign({}, rest, { type: this.itemType });
            return this.client._objectFromItem(sanitizedProperties, this.parent);
        };
        this.client = client;
        this.parent = parent;
    }
    get type() {
        return this._type;
    }
    get itemType() {
        return this._itemType;
    }
}
exports.default = RepresentationList;
