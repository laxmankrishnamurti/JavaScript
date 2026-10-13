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


let arr1 = ["first"];
arr1[0] = "second";
console.log(`arr1: ${arr1}`);

const arr2 = ["First"];
arr2[0] = "Second";
console.log(`arr2 : ${arr2}`);
console.log(`arr2 0th Index: ${arr2[0]}`);

const arr3 = ["one", "second", "third"];
console.log(`arr3: ${arr3}`);

//arr3 = ["4", "5", "6"];       
//console.log(`arr3: ${arr3}`);      // TypeError: Assignment to constant variable.      

arr3[0] = "4";
arr3[1] = "5";
arr3[2] = "6";
console.log(`arr3: ${arr3}`);