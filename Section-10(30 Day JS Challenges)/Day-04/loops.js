/**
 * Activity 01
 */

//Task 01

for (let i = 0; i <= 10; i++) {
  //   console.log("Number is : ", i);
}

//Task 02

for (let i = 1; i <= 10; i++) {
  //   console.log("Table of 5 : ", i * 5);
}

/**
 * Activity 02
 */

//Task - 03

let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}

// console.log("Sum from 1 to 10 is : ", sum);

//Task 04

let start = 10;
while (start >= 1) {
  //   console.log("i is : ", start);
  start--;
}

/**
 * Activity 03
 */

//Task - 05

let start1 = 1;
do {
  //   console.log("start1 is : ", start1);
  start1++;
} while (start1 <= 5);

//Task - 06

function getFactorial(num) {
  if (num === 0) {
    return 0;
  }

  let factorial = 1;
  do {
    factorial *= num;
    num -= 1;
  } while (num >= 1);
  return factorial;
}

let factorialOf = 5;
// console.log(`factorial of ${factorialOf} is : ${getFactorial(factorialOf)}`); //output : 120

/**
 * Activity 04
 */

//Task 07

function printAccendingStar(num) {
  let rows = num;
  while (rows) {
    let columns = num - rows + 1;
    let str = "* ";
    console.log(str.repeat(columns));
    rows -= 1;
  }
}

printAccendingStar(7);

let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "* ";
  //   console.log(str.repeat(i));
}

let num = "1";
console.log(num.repeat(10));

//Note :: repeat() is built-in function that comes with string object. It is used to print a string again and again with a repeat value.

/**
 * Activity - 05
 */

//Task - 08

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log("num is : ", i);
}

//Task - 09

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log("i is : ", i);
}
