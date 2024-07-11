// Creating Strings
// There are many ways to create strings in JavaScript. You can use single quotes, double quotes, or backticks.

// Single Quotes
let single = 'single quotes';

// Double Quotes
let double = "double quotes";

// Backticks
let backticks = `backticks`;

// Template literals allow for embedding variables and expressions:
let name = 'John';
let age = 30;
let sentence = `My name is ${name} and I am ${age} years old.`;

// 20 Most Common String Methods
// 1. length property
let str = 'hello';
let length = str.length; // 5
// 2. charAt()
let char = str.charAt(0); // 'h'
// 3. concat()
let str1 = 'hello';
let str2 = 'world';
let combined = str1.concat(' ', str2); // 'hello world'
// 4. includes()
let str3 = 'hello world';
let included = str3.includes('world'); // true
// 5. indexOf()
let str4 = 'hello world';
let index = str4.indexOf('world'); // 6
// 6. lastIndexOf()
let str5 = 'hello world';
let lastIndex = str5.lastIndexOf('o'); // 7
// 7. replace()
let str6 = 'hello world';
let replaced = str6.replace('world', 'there'); // 'hello there'
// 8. slice()
let str7 = 'hello world';
let sliced = str7.slice(6); // 'world'
// 9. substring()
let str9 = 'hello world';
let substring = str9.substring(6); // 'world'
// 10. toUpperCase()
let str10 = 'hello';
let upper = str10.toUpperCase(); // 'HELLO'
// 11. toLowerCase()
let str11 = 'HELLO';
let lower = str11.toLowerCase(); // 'hello'
// 12. trim()
let str12 = '   hello   ';
let trimmed = str12.trim(); // 'hello'
// 13. split()
let str13 = 'hello world';
let splitted = str13.split(' '); // ['hello', 'world']
// 14. repeat()
let str14 = 'hello';
let repeated = str14.repeat(3); // 'hellohellohello'
// 15. match()
let str15 = 'hello world';
let matched = str15.match(/o/g); // ['o', 'o']
// 16. search()
let str16 = 'hello world';
let searched = str16.search('world'); // 6
// 17. toString()
let str17 = 123;
let string = str17.toString(); // '123'

// Template Literals
// Template literals are a new way to create strings in JavaScript. They allow for embedding variables and expressions without concatenation.

// Multiline Strings
// Template literals also allow for multiline strings.
let multiline = `
  This is a
  multiline
  string.
`;

// Embedding Variables
let name = 'John';
let age = 30;
let sentence = `My name is ${name} and I am ${age} years old.`; // 'My name is John and I am 30 years old.'

// String Concatenation
// Using + Operator:
let str1 = 'hello';
let str2 = 'world';
let combined = str1 + ' ' + str2; // 'hello world'

// Using concat() Method:
let str1 = 'hello';
let str2 = 'world';
let combined = str1.concat(' ', str2); // 'hello world'

// Using Template Literals:
let str1 = 'hello';
let str2 = 'world';
let combined = `${str1} ${str2}`; // 'hello world'

// Escape Sequences
// New Line: \n - Adds a new line.
let newline = 'hello\nworld';
// Tab: \t - Adds a tab.
let tab = 'hello\tworld';
// Backslash: \\ - Adds a backslash.
let backslash = 'hello\\world';
// Quotes: \' and \" - Adds single or double quotes.
let quotes = 'hello\'world';
let doubleQuotes = 'hello\"world';

// String Immutability
// Strings in JavaScript are immutable, meaning they cannot be changed once created. Any method that modifies a string actually returns a new string.

let str = 'Hello';
str[0] = 'h'; // This will not change the string.
str = 'hello'; // This will create a new string.