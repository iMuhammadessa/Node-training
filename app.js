console.log('NodeJs Training Task performed by @Muhammad Essa');

// Declaration
var x = 8;
var y = 4;

// Addition program
var sum = x + y;

// Subtraction program
var sub = x - y;

// Multiplication program
var mul = x * y;

// console.log(sum);
// console.log(sub);
// console.log(mul);

// Log Modules exported
var myLogModule = require('./Log.js');
myLogModule.info('Node.js started');

// Message Module exported
var msg = require('./Messages.js');
console.log(msg);

// Data Module exported
var person = require('./data.js');
console.log(person.firstName + ' ' + person.lastName);