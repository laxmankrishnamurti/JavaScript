/**
 * Activity - 01
 */

//Task - 01

function checkNumber(num) {
  if (num === 0) {
    return console.log("Number is Zero");
  } else if (num > 0) {
    return console.log("Number is positive");
  } else {
    return console.log("Number is Negative");
  }
}

checkNumber(0);
checkNumber(3);
checkNumber(-34);

//Task - 02

function isEligibleForVoting(age) {
  if (age >= 18) {
    return console.log("You are eligible for voting");
  } else {
    return console.log("You are not eligible for voting");
  }
}

isEligibleForVoting(21);
isEligibleForVoting(12);

/**
 * Activity - 02
 */

//Task - 03

function getLargestNumber(num1, num2, num3) {
  let largestNumber = null;

  if (num2 > num1) {
    largestNumber = num2;
  } else if (num3 > num2) {
    largestNumber = num3;
  } else {
    largestNumber = num1;
  }

  return largestNumber;
}

console.log("Largest number is : ", getLargestNumber(10, 31, 25));

/**
 * Activity - 03
 */

//Task - 04

function getWeekStatus(num) {
  switch (num) {
    case 1:
      console.log("It's Sunday");
      break;
    case 2:
      console.log("It's Monday");
      break;
    case 3:
      console.log("It's Tuesday");
      break;
    case 4:
      console.log("It's Wednesday");
      break;
    case 5:
      console.log("It's Thursday");
      break;
    case 6:
      console.log("It's Friday");
      break;
    case 7:
      console.log("It's Saturday");
      break;
    default:
      console.log("Enter a valid number");
  }
}

getWeekStatus(5);

//Task - 05

function getStudentGrade(num) {
  switch (true) {
    case num >= 95:
      return "A";
    case num >= 90:
      return "B";
    case num >= 85:
      return "C";
    case num >= 80:
      return "D";
    case num >= 75:
      return "E";
    case num >= 50:
      return "F";
    case num > 0:
      return "Fail";

    default:
      console.log("Enter a valid marks");
  }
}

console.log("line no 112  :: ", getStudentGrade(96));
console.log("line no 113  :: ", getStudentGrade(15));
console.log("line no 114  :: ", getStudentGrade(75));

/**
 * Activity - 04
 */

//Task - 06

function getEvenOrOdd(num) {
  return num % 2 === 0 ? true : false;
}

let result = getEvenOrOdd(31);

if (result) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

/**
 * Activity - 05
 */

//Task - 07

function checkByGreaterDivisor(year) {
  if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function checkLeapYear(year) {
  let bigCheck = null;

  if (year > 100) {
    bigCheck = checkByGreaterDivisor(year);
  }

  if (year % 4 === 0 && bigCheck) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

checkLeapYear(400);
