"use strict";
/***************************
 * FUNCTION REST PARAMETER *
 ***************************/
Object.defineProperty(exports, "__esModule", { value: true });
// Function with a rest parameter and type annotations
function addAll(...nums) {
    let result = 0;
    // Using for...of ensures that 'num' is always treated as a defined number
    for (const num of nums) {
        result += num;
    }
    return result;
}
// Calling the function with various numeric arguments
// +true evaluates to 1
console.log(addAll(10, 20, 30, 100, 10.5, +true)); // Output: 171.5
//# sourceMappingURL=03-Function-Rest-Parameter.js.map