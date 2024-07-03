const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString()); // 100
console.log(balance.toString().length); // 3

console.log(balance.toFixed(3)); // 100.000
console.log(balance.toFixed(2)); // 100.00
console.log(balance.toFixed(1)); // 100.00

const otherNumber = 23.456 ; 

console.log(otherNumber.toPrecision(3)); // Number of significant must be in range 1-21 incusive. Return a string containing Number.
console.log(otherNumber.toPrecision(2)); // 23
console.log(otherNumber.toPrecision(4)); // 23.45

const hundred = 1000000;
console.log(hundred.toLocaleString()) // by-default it give U.S standard , so output = 1,000,000
console.log(hundred.toLocaleString('en-IN')); // Indian Standard , output = 10,00,000

// *********** Maths *****************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

console.log(Math.random()); // random values b/w 0 & 1
console.log(Math.random());