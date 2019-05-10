"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isApiItem(item) {
    return !Object.prototype.hasOwnProperty.call(item, 'items');
}
exports.isApiItem = isApiItem;
