// Declaration Statements
console.log("\n-- Declaration Statements --");
// Example: var, let, const
var x = 10;
let y = 20;
const z = 30;

console.log("var x:", x);
console.log("let y:", y);
console.log("const z:", z);

// Conditional Statements
console.log("\n-- Conditional Statements --");
// Example: if-else
if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is not greater than 10");
}

// Example: switch
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Another day");
}

// Looping Statements
console.log("\n-- Looping Statements --");
// Example: for loop
for (let i = 0; i < 3; i++) {
  console.log("for loop i:", i);
}

// Example: while loop
let j = 0;
while (j < 3) {
  console.log("while loop j:", j);
  j++;
}

// Example: do-while loop
let k = 0;
do {
  console.log("do-while loop k:", k);
  k++;
} while (k < 3);

// Function Statements
console.log("\n-- Function Statements --");
// Example: function declaration
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Alice"));

// Example: function expression
const greetExpr = function (name) {
  return `Hello, ${name}`;
};
console.log(greetExpr("Bob"));

// Example: arrow function
const greetArrow = name => `Hello, ${name}`;
console.log(greetArrow("Charlie"));

// Exception Handling Statements
console.log("\n-- Exception Handling Statements --");
// Example: try-catch-finally and throw
try {
  throw new Error("This is an error");
} catch (error) {
  console.error("Caught error:", error.message);
} finally {
  console.log("Finally block executed");
}

// Other Statements
console.log("\n-- Other Statements --");
// Example: break
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log("break example i:", i);
}

// Example: continue
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log("continue example i:", i);
}

// Example: return
function add(a, b) {
  return a + b;
}
console.log("return example add(2, 3):", add(2, 3));
