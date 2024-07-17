/**
 * Activity - 01
 */

//Task - 01

function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOrOdd(31)); //Output : odd

//Task - 02

function getSquare(num) {
  return num * num;
}

console.log("Square of 23 is : ", getSquare(23)); //output 529

/**
 * Activity - 02
 */

//Task - 03

const getMaximum = function (arr = []) {
  if (arr.length === 0) {
    return;
  }

  let maximumNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maximumNumber) {
      maximumNumber = arr[i];
    }
  }

  return maximumNumber;
};

console.log(
  "maximum number is : ",
  getMaximum([20, 50, 45, 15, 78, 96, 85, 98, 45, 69])
);

//Task - 04

const concatenateStr = function (str1, str2) {
  if (!str1 || !str2) {
    return console.error("Please provide both string");
  }

  let str = `${str1} ${str2}`;

  return str;
};

console.log("new string is : ", concatenateStr("Hello", "Laxman"));

/**
 * Activity - 03
 */

//Task - 05

const sumOfTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

console.log("sum of 10 and 34 is : ", sumOfTwoNumbers(10, 34));

//Task - 06

const checkCharacterInStr = (str, char) => {
  let isExist = str.indexOf(char);

  if (isExist >= 0) {
    return true;
  } else {
    return false;
  }
};

console.log("is Exist : ", checkCharacterInStr("asdsadsdfram", "r"));

/**
 * Activity - 04
 */

//Task - -07

function getProductOfTwoNumbers(num1, num2 = 2) {
  return num1 * num2;
}

console.log("product of 43 and 17 is : ", getProductOfTwoNumbers(43, 17));

//Task - 08

function greetings(name, age = 19) {
  return `Hello ${name} `;
}

console.log("Greetings : ", greetings("Laxman", 21));

/**
 * Activity - 05
 */

//Task - 09

function sayHii() {
  console.log("Hii there");
  console.log("How can i help you");
}

function higherOrderFunction(fun, rpt = 1) {
  for (let i = 0; i < rpt; i++) {
    fun();
  }
}

higherOrderFunction(sayHii, 5);

//Task - 10

const add = (value) => value + 2;
const multiply = (value) => value * 3;

function combineFunctions(fun1, fun2) {
  return function (value) {
    return fun2(fun1(value));
  };
}

const getCallbackFunction = combineFunctions(add, multiply); //first add and then multiply

const getResult = getCallbackFunction(5);
console.log("add 2 into 5 and then multiply by 3 the result is : ", getResult);
