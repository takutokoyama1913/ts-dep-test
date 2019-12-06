"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda = require("ramda");
function div(x, y) {
    if (y === 0) {
        throw new Error('divide by zero');
    }
    return x / y;
}
exports.div = div;
function ramdaDiv(x, y) {
    return ramda.divide(x, y);
}
exports.ramdaDiv = ramdaDiv;
