/**
 * Activity - 01
 */

//Task 01

let personName = "Laxman Krishnamurti";
let personAge = 21;

let personInfo = `Name : ${personName} and Age is : ${personAge}`;
console.log("personInfo :: ", personInfo);

//Task - 02

let str =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, ea voluptatem? Odit, temporibus at repellendus aspernatur maiores excepturi commodi voluptatum.";
let multiLineString = `${str}`;
// console.log(
//   "This is multiLineString that is created by string template :: ",
//   multiLineString
// );

/**
 * Activity - 02
 */

//Task - 03

let num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let firstElement = num[0];
let secondElement = num[1];

console.log(
  `firstElement : ${firstElement} and secondElement : ${secondElement}`
);

//Task - 04

let bookInfo = {
  title: "Vedanta",
  author: "Acharya Prashant",
  year: 2023,
};

let { title } = bookInfo;
let { author } = bookInfo;

console.log(`title : ${title} and author : ${author}`);

/**
 * Activity - 03
 */

//Task - 05

let newMarksArr = [...num, 200, 300, 400, 500];
console.log("newmarksArr : ", newMarksArr);

//Task - 06

// REST OPERATOR :: It allows us to take indefinite number of arguments in the form of an array

function sum(...num) {
  let sum = 0;
  sum = num.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return sum;
}

// console.log("sum is : ", sum(10, 20, 30, 40));

/**
 * Activity - 04
 */

//Task - 07

function getProduct(num1, num2 = 1) {
  return num1 * num2;
}

console.log("without default parameter is sets to 1 : ", getProduct(10, 20));
console.log("without default parameter is sets to 1 : ", getProduct(10));

/**
 * Activity  05
 */

//Task - 08

let myBook = {
  title: "Geeta",
  author: "Krishna",
  year: "Beyond timing",
  getTitle: function () {
    return this.title;
  },
  getAuthor: function () {
    return this.author;
  },
  getYear: function () {
    return this.year;
  },
};

console.log("title without using method : ", myBook.title);
console.log("Accessing author name via method : ", myBook.getAuthor());

//Task - 09

let username = "Laxman Krishnamurti";
let userEmail = "laxmankrishnamurti@gmail.com";
let userAge = 21;
let userPhoneNumber = 9508981101;

let computedObject = {};

//Assigning computed value to the blank object
computedObject.username = username;
computedObject.email = userEmail;
computedObject.age = userAge;
computedObject.phone = userPhoneNumber;

console.log("computedObject is : ", computedObject);
