"use strict";
/***********************************
 * INTERFACE METHOD AND PARAMETERS *
 ***********************************/
Object.defineProperty(exports, "__esModule", { value: true });
// Create an object that adheres to the 'Person' interface
const Sarah = {
    name: "Sarah",
    age: 30,
    greet(message) {
        console.log(`${this.name} says: ${message}`);
    },
};
Sarah.greet("Hello, TypeScript!");
//# sourceMappingURL=02-Interface-Method-And-Parameters.js.map