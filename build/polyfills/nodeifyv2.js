"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function nodeify(promise, callback) {
    if (callback) {
        promise.then((res) => callback(res)).catch((err) => callback(null, err));
        return;
    }
    else {
        return promise;
    }
}
exports.default = nodeify;
