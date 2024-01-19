"Use Strict"            //treat all js code as newer version.

//Variable Keywords :- var, let, const

var myName = "Laxman Krishnamurti";
let myName2 = "Sonu Kumar";
const myAge = 21;

//Single or Linear Printing : console.log(v1, v2, ....n) ; v :- Varibale Name

console.log(myName, myName2, myAge);            //Output : Laxman Krishnamurti Sonu Kumar 21

//Print like a table : console.table([v1,v2,v3.......n]) ; 

console.table([myName, myName2, myAge]);            //Variables tracked like an array's element.
/*
┌─────────┬───────────────────────┐
│ (index) │        Values         │
├─────────┼───────────────────────┤
│    0    │ 'Laxman Krishnamurti' │
│    1    │     'Sonu Kumar'      │
│    2    │          21           │
└─────────┴───────────────────────┘
*/

/**
 * Note :- (1). Prefer not to use var because of issue in block scope and functional scope.
 *         (2). Without Initialization of a variable it's bydefault value is "undefined".
 *        (3). Code Readability should be high.
 */

/**
 * What is Data-type?
 * 
 * ans :- Data-type simply tells us which type of data we have. Based on storing and accessing the data there are only two categories of data-type.
 * 
 * (1). Primitive Data-types :- String, Number, Boolean, Null, Undefined, Symbol, BigInt
 * (2). Non-Primitive Data-types :- Array, Object, Function
 * 
 * Primitive data-types is also known as "call by value".
 * Non-primitive data-type is also known as "call by reference".
 */

/**
 * Q :- Is JavaScript Statically typed or Dynamically typed language?
 * 
 * ans :- Dynamically Typed Language because in JavaScript Interpreter can assign variables a type at runtime based on the variable's value at the time. But, in Statically typed language (like:- C, C++, Java) data types are defined during compile time and cannot change during runtime.
 * 
 * In contrast, Dynamically typing allows variables to change their type during runtime.
 */
