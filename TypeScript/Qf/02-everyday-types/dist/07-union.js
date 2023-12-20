"use strict";
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(100);
printId('200');
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log('Welcome, ' + x.join(' and '));
    }
    else {
        console.log('Welcome, ' + x);
    }
}
welcomePeople('Zane');
welcomePeople(['Zane', 'Lh']);
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree('abcdefgh'));
console.log(getFirstThree([1, 2, 3, 4, 5]));
