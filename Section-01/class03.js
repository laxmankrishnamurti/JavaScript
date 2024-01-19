/**
 * Memory Management in JavaScript :: There are two types of memory spaces in JavaScript where we can store the data, these are :- 
 * 
 * (1). Stack Memory :- All the Primitive data types are stored here.
 * (2). Heap Memory :- All the Non-Primitive data types are stored here.
 */

/**
 * Primitive data types :- String, Number, Boolean, Null, undefined, Symbol, BigInt
 * 
 * Non-Primitive data types :- Array, Objects, Functions
 */

/**
 * Strings in JavaScript ::
 * 
 * What is String?
 * 
 * ans :- A string is a collection of characters. There are a lot of methods in JavaScript to play with strings.
 */

let myName = "Laxman Krishnamurti";
console.log(myName.length);                     //Check string lenght
console.log(myName.toUpperCase());             //for Uppercase
console.log(myName.toLowerCase());             //for lowercase
console.log(myName.charAt(2));                //to check which character is present at the specific index number.
console.log(myName.indexOf('K'));             //to check what's the index value of that particular character.
console.log(myName.substring(0, 4));         //to get a piece of the string.
console.log(myName.slice(-6));               //It's like substring but we can pass here the negative values.
console.log(myName.slice(-5, -1))

/**
 * Output ::
 * 19
 * LAXMAN KRISHNAMURTI
 * laxman krishnamurti
 * x
 * 7
 * Laxm
 * amurti
 * murt
 */

//Length and Trim Methods

let myName1 = "    Harshad Mehta   ";
console.log(myName1.length);                    //Output : 20
myName1 = myName1.trim();
console.log(myName1);                           //Harshad Mehta
console.log(myName1.length);                    //13

//Trim is used to remove the left and right spaces from the string. Trim dosen't remove the spaces between the string.

//Replace and Includes Methods

const searchLink = "https://www.google.com/";
console.log(searchLink.replace('google', 'laxman'));        //Output : https://www.laxman.com/
console.log(searchLink.includes('laxman'));                 //Output : false {because we did not change the actual variable value.}

//include returns booleans value.

//Split a string into an Array

const splitString = searchLink.split('/');
console.log(splitString);                   //Output : (4) ['https:', '', 'www.google.com', '']
const splitString1 = searchLink.split('.');
console.log(splitString1);                     //Output : (3) ['https://www', 'google', 'com/']