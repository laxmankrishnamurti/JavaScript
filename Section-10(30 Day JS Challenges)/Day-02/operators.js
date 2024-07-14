/**
 * Activity - 01
 */

//Task - 01

let num1 = 10;
let num2 = 20;

function add(para1, para2) {
  console.log(para1 + para2);
}

add(num1, num2); //output : 30

//Task - 02

function subtract(para1, para2) {
  console.log(para1 - para2);
}

subtract(num1, num2); //output : -10

//Task - 03

function multiply(para1, para2) {
  console.log(para1 * para2);
}

multiply(num1, num2); //output : 200

//Task - 04

function divide(para1, para2) {
  console.log(para1 / para2);
}

divide(num1, num2); //output : 0.5

//Task - 05

function getRemainder(para1, para2) {
  console.log("Remainder is :: ", para1 % para2);
}

getRemainder(num1, num2); //output : 10

/**
 * Activity - 02
 */

//Task - 06
function increaseByOne(para) {
  para += 1;
  console.log("Increased number is :: ", para);
}

increaseByOne(num1); //Ouput :: Increased number is :: 11

//task - 07

function decreaseByTwo(para) {
  para -= 2;
  console.log("Decreased number is :: ", para);
}

decreaseByTwo(num2); //output :: Decreased number is :: 18

/**
 * Activity - 03
 */

//Task - 08

console.log(num1 > num2); //output : false
console.log(num1 < num2); //output : true

//Task -09

let num3 = 20;

console.log(num1 >= num2); //output : false
console.log(num2 <= num3); //output : true

//Task - 10

let num4 = "10";
console.log(num1 == num4); //output : false
console.log(num1 === num2); //output : true

/**
 * Activity - 04
 */

//Task - 11

if (num1 > num2 && num3 > num4) {
  console.log("All conditions are true");
} else {
  console.log("Condition is getting false");
}

//output : Condition is getting false

//Task - 12

if (num1 > num2 || num1 == num4) {
  console.log("Condition is true");
} else {
  console.log("Conditon is getting false");
}

//output : Condition is true

//Task - 13

if (!(num1 > num2)) {
  console.log("Condition is false");
} else {
  console.log("Condition is true");
}

//output : Condition is true
/**
 * explanation :: num1 > num2  = false          !false = true           if only will run when condition is true
 */

/**
 * Activity - 05
 */

//Task - 14
console.log(num1 > num2 ? "Condition is true" : "Condition is false"); //output : Condition is flase

/**
 * Feature Request
 */

//Task - 01

function arithmeticOperationsResult(operationName, values = []) {
  switch (operationName) {
    case "ADD":
      let sum = values.reduce((value, nexValue) => {
        return value + nexValue;
      }, 0);
      console.log("Sum of all numbers is : ", sum);
      break;

    case "SUBTRACT":
      let num1 = values[0];
      let num2 = values[1];
      console.log("Subtract value is : ", num1 - num2);
      break;

    case "MULTIPLY":
      let multiply = values.reduce((value, nexValue) => {
        return value * nexValue;
      }, 0);
      console.log("Product of all numbers is : ", multiply);
      break;

    case "DIVIDE":
      let num3 = values[0];
      let num4 = values[1];
      console.log("Division value is : ", num3 / num4);
      break;

    default:
      "Please input a valid operationName(string with all capital) and values(array)";
  }
}

arithmeticOperationsResult("ADD", [10, 20, 3, 0, 20]);
arithmeticOperationsResult("SUBTRACT", [10, 20]);
arithmeticOperationsResult("MULTIPLY", [10, 20, 3, 0, 20]);
arithmeticOperationsResult("DIVIDE", [10, 20]);

//Task - 02 (Unable to understand the question)

function compareAndGetStatus(num1, num2) {
  if (num1 === num2) {
    return console.log("num1 and num2 are equal");
  } else if (num1 > num2) {
    console.log("num1 is grater than num2");
  } else {
    console.log("num2 is greater than num1");
  }
}

compareAndGetStatus(10, 20);
compareAndGetStatus(20, 20);
compareAndGetStatus(100, 20);

//Task - 03

function getPositiveOrNegative(para) {
  if (para === 0) {
    console.log(`${para} is nor negative or positive integer`);
  }
  console.log(
    para > 0
      ? `${para} is a Positive integer number`
      : `${para} is a negative integer number`
  );
}
