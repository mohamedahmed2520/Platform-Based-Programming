const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let a = 10, b = 5;

console.log("Addition:", add(a, b));
console.log("Subtraction:", subtract(a, b));
console.log("Multiplication:", multiply(a, b));
console.log("Division:", divide(a, b));
