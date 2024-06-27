// Example - JavaScript Syntax
// Variable declaration

var a // without ; is valid in JavaScript
let c, d, e;

// Assign value to the variable
c = 5;

// Computer value of variables
d = c;
e = c / d;

// Function declaration
function greet(name) {
  return `Hello, ${name}`;
}

// Example - Case Sensitivity
let myVariable = 10;
let myvariable = 20; // Different variable

const MY_CONSTANT = 10;

// Example - Comments
// This is a single-line comment
let x = 10;

/*
This is a multi-line comment
that spans multiple lines
*/
let y = 20;

// Example - Operators
// 1. Arithmetic Operators
let sum = 10 + 20; // Addition
let difference = 10 - 5; // Subtraction
let product = 10 * 5; // Multiplication
let quotient = 10 / 2; // Division
let remainder = 10 % 3; // Modulus

// 2. Comparison Operators
let isEqual = 10 === 10; // Equality
let isNotEqual = 10 !== 20; // Inequality
let isGreaterThan = 10 > 5; // Greater than
let isLessThan = 10 < 20; // Less than
let isGreaterOrEqual = 10 >= 10; // Greater than or equal to
let isLessOrEqual = 10 <= 20; // Less than or equal to

// 3. Logical Operators
let andOperator = true && false; // Logical AND
let orOperator = true || false; // Logical OR
let notOperator = !true; // Logical NOT

// 4. Assignment Operators
let P = 10;
P += 5; // P = P + 5
P -= 5; // P = P - 5
P *= 5; // P = P * 5
P /= 5; // P = P / 5
P %= 5; // P = P % 5

// 5. Increment and Decrement Operators
let count = 0;
count++; // Increment by 1
count--; // Decrement by 1