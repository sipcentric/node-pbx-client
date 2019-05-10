"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extend = require("deep-extend");
class Representation {
    get type() {
        return this._type;
    }
    constructor(client, properties, parent) {
        this.client = client;
        extend(this, properties);
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
