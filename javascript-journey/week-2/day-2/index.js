//  Primitive Data Types

let greeting = "Hello, world!"; // String
let age = 30; // Number
let isJavaScriptFun = true; // Boolean
let nothing = null; // Null
let notDefined; // Undefined
let uniqueId = Symbol("id"); // Symbol
let bigIntNumber = BigInt(9007199254740991); // BigInt

console.log(greeting, age, isJavaScriptFun, nothing, notDefined, uniqueId, bigIntNumber);

//  Non-Primitive Data Types

// Object
let person = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming", "hiking"]
};

// Array
let colors = ["red", "green", "blue"];

// Function
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(person, colors, greet("Alice"));

//  Strings
let welcomeMessage = "Welcome to the JavaScript Journey!";
console.log(welcomeMessage.length); // Length of the string
console.log(welcomeMessage.toUpperCase()); // Uppercase
console.log(welcomeMessage.substring(0, 7)); // Substring

//  Numbers
let num1 = 10;
let num2 = 3.5;
let sum = num1 + num2; // Arithmetic operations
let product = num1 * num2;
let difference = num1 - num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

console.log(sum, product, difference, quotient, remainder);

//  Booleans
let isSunny = true;
let isRaining = false;

if (isSunny) {
  console.log("It's a sunny day!");
} else {
  console.log("It's not sunny today.");
}

//  Null and Undefined
let unknownValue;
console.log(unknownValue); // undefined

let emptyValue = null;
console.log(emptyValue); // null

//  Objects
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  startEngine: function () {
    console.log("Engine started!");
  }
};

console.log(car.make, car.model, car.year);
car.startEngine(); // Method invocation

//  Arrays
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Accessing by index

fruits.push("date"); // Adding an element
console.log(fruits);

fruits.pop(); // Removing the last element
console.log(fruits);

// : Functions
function add(a, b) {
  return a + b;
}

let result = add(5, 7);
console.log(result); // Function call

// : Type Conversion
let str = "123";
let num = Number(str); // Explicit conversion
console.log(num); // 123

let implicitSum = str + 1; // Implicit conversion
console.log(implicitSum); // "1231"