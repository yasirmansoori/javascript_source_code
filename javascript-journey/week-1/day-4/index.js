// Introduction to JavaScript Versions
console.log("JavaScript Versions: An Overview");

// Early Days - ES1 to ES3
// Example: ES3 introduced try-catch statement
try {
  throw new Error("This is an ES3 error example");
} catch (e) {
  console.log("Caught an error:", e.message);
}

// ECMAScript 5 (ES5)
// Example: Using strict mode and array forEach method
"use strict";
const arrayES5 = [1, 2, 3];
arrayES5.forEach(num => console.log("ES5 Array Element:", num));

// ECMAScript 6 (ES6/ES2015)
// Example: Arrow function, template literals, let/const
const greetES6 = name => `Hello, ${name}!`;
console.log(greetES6("ES6 User"));

const nameES6 = "JavaScript";
const greetingES6 = `Welcome to ${nameES6} ES6!`;
console.log(greetingES6);

// ECMAScript 7 (ES7/ES2016) and ES8 (ES2017)
// Example: Exponentiation operator, async/await
console.log("Exponentiation (ES7):", 2 ** 3);

const asyncExampleES8 = async () => {
  return "ES8 Async/Await Example";
};
asyncExampleES8().then(result => console.log(result));

// ECMAScript 9 (ES9/ES2018) and ES10 (ES2019)
// Example: Asynchronous iteration, array.flat
const asyncIterableES9 = {
  async *[Symbol.asyncIterator]() {
    yield "Hello";
    yield "from";
    yield "Async Iterable";
  }
};
(async () => {
  for await (const val of asyncIterableES9) {
    console.log(val);
  }
})();

const arrayES10 = [1, [2, 3], [4, [5]]];
console.log("Flattened Array (ES10):", arrayES10.flat(2));

// ECMAScript 11 (ES11/ES2020) and Beyond
// Example: BigInt, optional chaining
const bigIntES11 = 9007199254740991n;
console.log("BigInt (ES11):", bigIntES11);

const userES11 = {
  name: "ES11 User",
  address: {
    street: "Optional Chaining St"
  }
};
console.log("Optional Chaining (ES11):", userES11.address?.street);
