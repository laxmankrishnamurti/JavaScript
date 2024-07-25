/**
 * Activity - 01
 */

//Task - 01

import { addTwoNumbers } from "./moduleProvider.js";
console.log("Addition result : ", addTwoNumbers(10, 20));

//Task - 02

import { userInfo } from "./moduleProvider.js";
console.log("username is : ", userInfo.getUsername());
console.log("UserInfo :: ", userInfo.getUserInfo());

/**
 * Activity - 02
 */

//Task - 03

import {
  getSumOfAnArray,
  sortArray,
  sortArrayOfObjectByPrice,
} from "./taskThreeModule.js";

const marks = [95, 85, 99, 75, 89, 91];
console.log("Array sum : ", getSumOfAnArray(marks)); //Output : 534

console.log("sorted array is : ", sortArray(marks)); //Output :  [75, 85, 89, 91, 95, 99]

const productLists = [
  {
    _id: Date.now(),
    productName: "PC with Ryzen-3 Processor",
    price: 35000,
  },
  {
    _id: Date.now(),
    productName: "OPPO-K10 Smart Phone",
    price: 16000,
  },
  {
    _id: Date.now(),
    productName: "Lenovo ideapad slim-3 Laptop",
    price: 24500,
  },
];

const sortedProductList = sortArrayOfObjectByPrice(productLists);
console.log("sortedProduct List :: ", sortedProductList);

//Task - 04

import returnWindowObject from "./taskFourModule.js";
console.log("window object : ", returnWindowObject());

/**
 * Activity - 03
 */

//Task - 05

import {
  _id,
  username,
  email,
  age,
  getUsername,
  getUseremail,
  getUserInfo,
} from "./taskFiveModule.js";

const userDetails = {
  _id: _id,
  username: username,
  email: email,
  age: age,
  getUsername: getUsername,
  getUseremail: getUseremail,
  getUserInfo: getUserInfo,
};

console.log("userDetails :: ", userDetails);
console.log("useremail :: ", userDetails.email);

/**
 * Activity - 04
 */

//Task - 06

import _, { first, head, nth } from "lodash";

const myMarks = [95, 91, 89, 88, 75, 85];
console.log(_.first(myMarks)); //Output : 95
console.log(_.last(myMarks)); //Output : 85
console.log(head(myMarks)); //Output: 95
console.log(nth(myMarks, 4)); //Output : 75

const numArr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const sqareMatrix = _.chunk(numArr, 3);
console.log(sqareMatrix); //Output : (3) [Array(3), Array(3), Array(3)]

const arr1 = [1, 2, 3, 5, 6, 8];
const arr2 = [1, 4, 5, 8, 7, 9, 6];

const difference = _.difference(arr1, arr2);
console.log(difference); //Output : [2,3]
const difference2 = _.difference(arr2, arr1);
console.log(difference2); //Output : [4,7,9]

console.log(_.drop(arr1, 2)); //Output : [3,5,6,8] -> Without argument first element will be dropped
console.log(_.take(arr2, 4)); //Output :  [1,4,5,8] -> How many numbers we want to take from the argumented array

console.log(_.fill(arr1, 0)); //Output : [0,0,0,0,0,0]
console.log(_.fill(Array(10), 2)); //Output : [2,2,2,2,2,2,2,2,2,2]

const multiDimensionalArray = [
  10,
  20,
  [55, 41, [56]],
  85,
  [69, [57, [85, [92, 56]]]],
];

console.log(_.flatten(multiDimensionalArray)); //Output :  [10, 20, 55, 41, Array(1), 85, 69, Array(2)]
console.log(_.flattenDepth(multiDimensionalArray, 2)); //Output : [10, 20, 55, 41, 56, 85, 69, 57, Array(2)]
console.log(_.flattenDeep(multiDimensionalArray)); //Output :  [10, 20, 55, 41, 56, 85, 69, 57, 85, 92, 56]

const a = [1, 2, 4, 58, 5, 12];
const b = [85, 74, 12, 5];

console.log(_.union(a, b)); //Output :[1, 2, 4, 58, 85, 74, 12, 5]
console.log(_.intersection(a, b)); //Output : [5,12]

const users = [
  {
    _id: Date.now(),
    username: "Laxman Krishnamurt",
    age: 21,
    gender: "male",
    email: "laxmankrishnamurti@gmail.com",
    country: "Bharat",
    salary: "$75450",
  },
  {
    _id: Date.now(),
    username: "Kawya Krishnamurt",
    age: 6,
    gender: "female",
    email: "kawyakrishnamurti@gmail.com",
    country: "Bharat",
    salary: "$7545",
  },
  {
    _id: Date.now(),
    username: "Anglina",
    age: 28,
    gender: "female",
    email: "anglina@gmail.com",
    country: "Germany",
    salary: "$17545",
  },
  {
    _id: Date.now(),
    username: "Maksud Alam",
    age: 25,
    gender: "male",
    email: "maksudalam@gmail.com",
    country: "Pakistan",
    salary: "$75451",
  },
  {
    _id: Date.now(),
    username: "Vikram Dhanush",
    age: 14,
    gender: "male",
    email: "vikramdhanush@gmail.com",
    country: "Bharat",
    salary: "$70545",
  },
  {
    _id: Date.now(),
    username: "Lucy",
    age: 24,
    gender: "female",
    email: "lucy@gmail.com",
    country: "China",
    salary: "$7545",
  },
  {
    _id: Date.now(),
    username: "Sammie Lie",
    age: 26,
    gender: "male",
    email: "sammielie@gmail.com",
    country: "China",
    salary: "$75458",
  },
];

console.log(_.countBy(users, "gender")); //Output : {male: 4, female: 3}
console.log(_.groupBy(users, "country"));
// {Bharat: Array(3), Germany: Array(1), Pakistan: Array(1), China: Array(2)}

const sortByUserAge = _.orderBy(users, "age", "desc");
console.log(_.first(sortByUserAge).age, _.first(sortByUserAge).username); //Output : 28 'Anglina'

const topThreeByAge = _.take(sortByUserAge, 3);
const topThreeNameByAge = _.map(topThreeByAge, "username");
console.log(topThreeNameByAge); //Output : ['Anglina', 'Sammie Lie', 'Maksud Alam']

const totalSalary = _.reduce(
  users,
  (prev, curr) => {
    return prev + Number(curr.salary.split("$")[1]);
  },
  0
);
console.log("total salary  : ", totalSalary); //Output : total salary  :  329539

const groupByGender = _.groupBy(users, "gender");

const totalSalaryByGender = _.map(groupByGender, (grp) =>
  _.reduce(
    grp,
    (prev, curr) => {
      return prev + Number(curr.salary.split("$")[1]);
    },
    0
  )
);

console.log("totalSalaryByGender :: ", totalSalaryByGender);
