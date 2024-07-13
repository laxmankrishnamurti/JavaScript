/**
 * Activity -01
 */

//Task -01

var myAge = 21;
console.log("myAge var-declaration :: ", myAge);

//Task -2
let myName = "Laxman Krishnamurti";
console.log("myName let-declaration :: ", myName);

/**
 * Activity - 02
 */

//Task - 03

const isEnrolledIn_30_DaysJsChallenge = true;
console.log(
  "isEnrolledIn_30_DaysJsChallenge const-bool-declaration :: ",
  isEnrolledIn_30_DaysJsChallenge
);

/**
 * Activity - 03
 */

//Task - 04

const studentAge = 21;
console.log("type of studentAge is :: ", typeof studentAge); //output : number

const studentName = "Laxman Krishnamurti";
console.log("type of studentName is :: ", typeof studentName); //output : string

const studentMarks = [95, 91, 89, 88, 75];
console.log("type of studentMarks is :: ", typeof studentMarks); //output : object

/**
 * I want to add some insignts here :: Arrays are specialized object.
 *
 * The primitive data-types in JavaScript -> undefined, null, string, number, boolean, bigInt, symbol
 *
 * Note :: The typeof(argument) operator in JavaScript is designed to return simple, primitive data-types. For anything that is not primitive types the operator will returns "object". This includes array, plain objects and functions.
 *
 * To be more precise, generally what we think that, in other programming languages like C, C++, JAVA..etc, they have it's own primitive data types in which array is included, but JavaScript is not like other programming languages. It has it's own designed principles. In JavaScript there is no primitive daya type such as "array". Actually, what happen is when we are declaring an array(as we think) in JavaScript, we are actually declaring an object. It might seems like confusing but this is true. And the object that we have declared and want to check whether the object is array or not? Then we can use it's own pre-built-in method such as
 *
 * Array.isArray(argument)
 * console.log("argument" instanceof Array)
 *
 * And once it will return true that means the object is an array. And if it's an array then we can use built-in methods for Array.
 *
 * Inheritance : Arrays in JavaScript are objects with additional properties and methods that make them behave like arrays. This is why typeof an array returns "object".
 */

const studentInfo = {
  name: "Laxman krishnamurti",
  age: 21,
  marks: [95, 91, 89, 85, 75],
};

console.log("type of studentInfo is :: ", typeof studentInfo); //output : object

/**
 * Activity - 04
 */

//Task - 05

let username = "Sonu Kumar";
console.log("Initial value is :: ", username);
username = "Laxman Krishnamurti";
console.log("Changed value is :: ", username);

/**
 * Activity - 05
 */

//Task - 06

const userAge = 21;
console.log("userAge is :: ", userAge);
// userAge = 22;
// console.log("new userAge is :: ", userAge); //TypeError : Assignment to constant variable

/**
 * This error comes because of we are actually trying to change or modify a variable that cannot be cahnged.
 */

/**
 * let's go one step further. Why this will prevent to modify the userAge value?
 * - Because, it's a PASS-BY-VALUE
 *
 * let's try to assign a constant value which is PASS-BY-REFERENCE
 */

const user1Age = 21;
console.log("user1Age is :: ", user1Age);
const user2Age = user1Age;
console.log("user2Age is :: ", user2Age);

//let's try to change this
// user2Age = 22;
console.log("user2Age is :: ", user2Age); //TypeError : Assignment to constant variable

//Such type of assignment is not a PASS-BY-REFERENCE it's called PASS-BY-VALUE
//PASS-BY-REFERENCE = Array, Plain objects

const user3Age = [23];
console.log("user3Age is :: ", user3Age); //output : [23]
const user4Age = user3Age;
console.log("user4Age is :: ", user4Age); //output : [23]
user3Age[0] = 24;
console.log("user4Age is ::", user4Age); //output : [24]
console.log("user3Age is ::", user3Age); //output : [24]

//can user4Age chagne the value? let's try

user4Age[0] = 50;
console.log("user3Age is :: ", user3Age); //output : [50]
console.log("user4Age is :: ", user4Age); //output : [50]

//This is called PASS-BY-REFERENCE-VALUE

/**
 * Feature Request
 */

//Task - 01

function checkTypeAndLog(input) {
  let checkType = typeof input;

  switch (checkType) {
    case "undefined":
      console.log(`Type of ${input} is ${checkType}`);
      break;

    case "string":
      console.log(`Type of ${input} is ${checkType}`);
      break;

    case "number":
      console.log(`Type of ${input} is ${checkType}`);
      break;

    case "function":
      console.log(`Type is ${checkType}`);
      break;
  }

  if (checkType === "object") {
    let checkArray = Array.isArray(input);
    if (checkArray) {
      if (input.length === 0) {
        console.log("Type of the input value is Array");
      } else {
        console.log(`Type of [${input}] is Array`);
      }
    } else if (input instanceof Object) {
      console.log(`Type is :: A Plain Object`);
    } else {
      //for null
      console.log(`Type of ${input} is ${checkType}`);
    }
  }
}

function sayHello() {
  console.log("Hello there!");
}

checkTypeAndLog(null);

//Task -02

let user5Age = 30;
console.log("user5Age is :: ", user5Age); //output : 30
user5Age = 31;
console.log("user5Age is :: ", user5Age); //output : 31

const user6Age = 40;
console.log("user6Age is :: ", user6Age); //output : 40

setTimeout(() => {
  try {
    user6Age = 41;
  } catch (error) {
    console.error(
      "Error while trying to reassign user6Age :: Error msg -> ",
      error
    );
  }
}, 2000);

/**
 * output :- Error while trying to reassign user6Age :: Error msg -> TypeError : Assignment to constant variable
 */
