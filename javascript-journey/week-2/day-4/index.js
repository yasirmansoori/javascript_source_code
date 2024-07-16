// Introduction to Number Data Type
let integer = 42;
let floatingPoint = 3.14;
console.log("Integer:", integer);
console.log("Floating-Point:", floatingPoint);

// Numeric Literals
let decimal = 42;
let binary = 0b101010; // 42 in binary
let octal = 0o52; // 42 in octal
let hexadecimal = 0x2A; // 42 in hexadecimal
console.log("Decimal:", decimal);
console.log("Binary:", binary);
console.log("Octal:", octal);
console.log("Hexadecimal:", hexadecimal);

// Special Numeric Values
let inf = Infinity;
let negInf = -Infinity;
let notNumber = NaN;
console.log("Infinity:", inf);
console.log("Negative Infinity:", negInf);
console.log("NaN:", notNumber);

// Number Properties
console.log("MAX_VALUE:", Number.MAX_VALUE);
console.log("MIN_VALUE:", Number.MIN_VALUE);
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("NaN:", Number.NaN);

// Basic Arithmetic Operations
let sum = 5 + 3;
let difference = 5 - 3;
let product = 5 * 3;
let quotient = 5 / 3;
let remainder = 5 % 3;
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

// Increment and Decrement
let counter = 0;
counter++;
console.log("Increment:", counter); // 1
counter--;
console.log("Decrement:", counter); // 0

// Type Conversion
let int = parseInt("42");
let float = parseFloat("3.14");
let num = Number("42");
let str = (42).toString();
console.log("parseInt:", int);
console.log("parseFloat:", float);
console.log("Number:", num);
console.log("toString:", str);

// Math Object Overview
console.log("Math.round(4.6):", Math.round(4.6));
console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.random():", Math.random());
console.log("\nSlide 9: More Math Methods");
console.log("Math.min(1, 2, 3):", Math.min(1, 2, 3));
console.log("Math.max(1, 2, 3):", Math.max(1, 2, 3));
console.log("Math.sqrt(9):", Math.sqrt(9));
console.log("Math.pow(2, 3):", Math.pow(2, 3));

//  Scientific Notation
let bigNumber = 1.23e+5;
let smallNumber = 1.23e-5;
console.log("Big Number (1.23e+5):", bigNumber);
console.log("Small Number (1.23e-5):", smallNumber);

//  Number Methods
let pi = 3.14159;
console.log("toFixed(2):", pi.toFixed(2));
let exp = 123;
console.log("toExponential(2):", exp.toExponential(2));
let precise = 123.456;
console.log("toPrecision(4):", precise.toPrecision(4));