import * as ramda from 'ramda';
export function div(x, y) {
    if (y === 0) {
        throw new Error('divide by zero');
    }
    return x / y;
}
export function ramdaDiv(x, y) {
    return ramda.divide(x, y);
}
