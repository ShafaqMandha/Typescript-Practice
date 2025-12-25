"use strict";
/******************
 * NULLABLE TYPES *
 ******************/
Object.defineProperty(exports, "__esModule", { value: true });
let username = "Glicher"; // The variable can hold a string or null
let ageEx = null; // The variable can hold a number or null
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log(`Hello, ${username}!`);
    }
}
greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null); // Output: Hello, Guest!
//# sourceMappingURL=03-Nullable-Types.js.map