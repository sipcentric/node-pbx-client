"use strict";
/*
  Thanks go to Brian Mancini for this polyfill of Q's 'nodeify' method
  http://derpturkey.com/promise-callback-pattern-for-javascript/
*/
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
