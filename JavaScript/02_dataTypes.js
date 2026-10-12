"use strict"; // treat all JS code as newer version

// alert("Warning"); We are using node.js, not browser.

console.log(10); console.log("userId")    // Code redability should be high

// Data Type
let clientName = "Nikki Kumari" // string
let age = 3 // number
let isLoggedIn = true   //boolean
let priceFluctuation = 1342.9385737462842384727;
// console.log(priceFluctuation);

// null -> Standalone value
// undefined -> Variable is not assigned
// symbol -> to find uniqueness


// Object

console.log("type of priceFluctuation",typeof priceFluctuation);
console.log(typeof undefined);      // undefined
console.log(typeof null)            // object





/**
 * Notes on JavaScript Data Types
 * 
 * A JavaScript variable can hold 8 types of data.
 *    - 7 Primitive Data Types 
 *          - Numeric Type
 *                - Number (only accurate up to 15 digits. There is no such things as a JavaScript Integer. All JavaScript Numbers are 64-bit floating point.)
 *                - Bigint
 *          - Non-Numeric Type 
 *                - String
 *                - Boolean
 *                - Null
 *                - Undefined
 *                - Symbol
 *    - 1 Object Data Type (Non-Primitive)
 *          - Object
 *          - Array
 *          - Function
 *          - Date
 *          - RegExp
 *          - Set
 *          - Map
 */