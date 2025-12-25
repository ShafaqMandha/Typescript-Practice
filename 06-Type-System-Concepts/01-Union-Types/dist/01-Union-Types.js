"use strict";
/***************
 * UNION TYPES *
 ***************/
Object.defineProperty(exports, "__esModule", { value: true });
let myVar;
myVar = "Hello"; // Valid assignment
console.log(myVar);
myVar = 42; // Valid assignment
console.log(myVar);
// Uncommenting the line below would result in a TypeScript error
// myVar = true;  // Error: Type 'boolean' is not assignable to type 'string | number'.
//# sourceMappingURL=01-Union-Types.js.map