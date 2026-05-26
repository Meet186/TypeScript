"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai....`;
    }
    return `Chai order : ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `serving ${msg}`;
    }
    return `Serving deafult chai...`;
}
function orderChai(size) {
    if (size === 'small') {
        return `small chai`;
    }
    if (size == 'medium' || size == 'large') {
        return `Serve more chai`;
    }
}
class khuladChai {
    serve() {
        return `Serve khuladChai`;
    }
}
class cuttingChai {
    serve() {
        return `Serve cuttingChai`;
    }
}
function serveingChai(chai) {
    if (chai instanceof khuladChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === 'object' &&
        typeof obj != null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number');
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with sugar ${item.sugar}`;
    }
    return `Serve deafult chai..`;
}
//# sourceMappingURL=typeNarrowing.js.map