"use strict";
function printCoord(pt) {
    console.log('x is ' + pt.x);
    console.log('y is ' + pt.y);
}
printCoord({
    x: 7,
    y: 8,
});
function printName(obj) {
    var _a;
    // if (obj.last !== undefined) {
    //   console.log(obj.last.toLowerCase())
    // }
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toLowerCase());
}
printName({
    first: 'Zhao',
});
printName({
    first: 'Zhao',
    last: 'Zane',
});
