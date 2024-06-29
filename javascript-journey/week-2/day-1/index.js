// declaring variable with var keyword
var x = 5;
var y = "Hello";

// hoisting example with var keyword
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// declaring variable with let keyword
let x = 5;
let y = "Hello";

// hoisting example with let keyword
if (true) {
  let a = 10;
  console.log(a); // 10
}
console.log(a); // ReferenceError: a is not defined

// declaring variable with const keyword
const x = 5;
const y = "Hello";

// hoisting example with const keyword
const a = 10;
a = 20; // TypeError: Assignment to constant variable.

// Scope
var globalVar = "Global";

function myFunction() {
  var functionVar = "Function";
  console.log(globalVar); // Accessible
  console.log(functionVar); // Accessible
}

myFunction();
console.log(functionVar); // ReferenceError: functionVar is not defined

// Varibale hoisting
console.log(x); // undefined
var x = 5;

console.log(y); // ReferenceError: y is not defined
let y = 10;

// difference between var, let and const
var a = 10;
var a = 20; // No error

let b = 10;
let b = 20; // SyntaxError: Identifier 'b' has already been declared

const c = 10;
c = 20; // TypeError: Assignment to constant variable.

// best practices for using variables
// 1. Use let only if you need to reassign the variable
let count = 0;
count = 1;

// 2. Avoid using var
var x = 5;
var x = 10;

// 3. Use descriptive variable names
const firstName = "John";
const lastName = "Doe";

// 4. Use camelCase for variable names
const fullName = "John Doe";
const maxSpeed = 100;
const isRaining = true;

// 5. Use uppercase for constant variable names
const PI = 3.14;
const MAX_SIZE = 100;
const URL = "https://www.example.com";

// 6. Use meaningful variable names
const radius = 10;
const area = Math.PI * radius * radius;
const circumference = 2 * Math.PI * radius;

// 7. Use variables to store intermediate values
const baseSalary = 50000;
const bonus = 10000;
const taxRate = 0.1;
const tax = (baseSalary + bonus) * taxRate;
const totalSalary = baseSalary + bonus - tax;

// 8. Use variables to store function return values
function calculateTax(baseSalary, bonus, taxRate) {
  return (baseSalary + bonus) * taxRate;
}

const baseSalary = 50000;
const bonus = 10000;
const taxRate = 0.1;
const tax = calculateTax(baseSalary, bonus, taxRate);
const totalSalary = baseSalary + bonus - tax;

// 9. Use variables to store object properties
const person = {
  name: "John",
  age: 30,
  profession: "teacher"
};

const name = person.name;
const age = person.age;
const profession = person.profession;

// 10. Use variables to store DOM elements
const heading = document.querySelector("h1");
heading.textContent = "Hello, World!";
heading.style.color = "red";

// 11. Use variables to store regular expressions
const pattern = /[A-Z]+/;
const text = "Hello, World!";
const match = text.match(pattern);
console.log(match);

// 12. Use variables to store function arguments
function greet(name) {
  return "Hello, " + name + "!";
}
const message = greet("John");
console.log(message);

// 13. Use variables to store loop values
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// 14. Use variables to store conditional values
const age = 30;
let message;

if (age >= 18) {
  message = "You are an adult";
}
console.log(message);

// 15. Use variables to store error messages
let error;

try {
  throw new Error("Something went wrong");
}
catch (e) {
  error = e.message;
}
console.log(error);
