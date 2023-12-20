"use strict";
let testString = 'Zane';
testString = 'Zanebla';
const constantString = 'Hello';
let x1 = 'hello';
function printText(s, alignment) { }
printText('hello', 'left');
printText('world', 'right');
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) { }
configure({
    width: 100,
});
configure('auto');
let b1 = true;
let b2 = false;
const obj1 = {
    count: 0,
};
if (true) {
    obj1.count = 1;
}
function handleRequest(url, method) { }
// const req = {
//   url: 'https://example.com',
//   method: 'GET' as 'GET',
// }
const req = {
    url: 'https://example.com',
    method: 'GET',
};
handleRequest(req.url, req.method);
