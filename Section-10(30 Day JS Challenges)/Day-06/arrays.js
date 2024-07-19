/**
 * Activity 01
 */

//Task - 01

let numArr = [1, 2, 3, 4, 5];
console.log("numArr is  : ", numArr);

//Task - 02

console.log("The first value of the numArr is : ", numArr[0]);

/**
 * Activity - 02
 */

//Task - 03

numArr.push(6);
console.log("After pushing 6 into the numArr : ", numArr);

// Task - 04

numArr.pop();
console.log("Removing the last element from the numArr : ", numArr);

//Task - 05

numArr.shift(0);
console.log(
  "After removing first element from the begining of the array : ",
  numArr
);

//Task - 06

numArr.unshift(1);

console.log(
  "After adding 1 into the numArr to the begining of the array : ",
  numArr
);

/**
 * Activity - 03
 */

//Task - 07

const doubleArr = numArr.map((num) => {
  return num * 2;
});

console.log("doubleArray is  : ", doubleArr);

//Task - 08

const evenList = numArr.filter((num) => {
  if (num % 2 === 0) {
    return num;
  }
});

console.log("EvenList arr : ", evenList);

//Task - 09

const sumOfArr = numArr.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log("sum of the numArr is : ", sumOfArr);

/**
 * Activity - 04
 */

//Task - 10

for (let i = 0; i < numArr.length; i++) {
  console.log(`index : ${i} value : ${numArr[i]} by for-loop`);
}

//Task - 11

numArr.forEach((num, index) => {
  console.log(`index : ${index} value : ${num} by forEach-loop`);
});

/**
 * Activity - 05
 */

//Task - 12

const multiDimensionalArray = [
  [1, 2, 3],
  [10, 20, 30],
  [100, 200, 300],
];
console.log("Multidimensional array starts from here");

multiDimensionalArray.forEach((rows, index) => {
  return rows.forEach((row, column) => {
    console.log(
      `row-number : ${index}, column-number : ${column} value : ${row}`
    );
  });
});

//Task - 13

let targetValue = 200;

multiDimensionalArray.forEach((rowValue, rowIndex) => {
  let isExist = false;
  rowValue.forEach((columnValue, columnIndex) => {
    if (columnValue === targetValue) {
      console.log("The multidimensional array  : ", multiDimensionalArray);
      console.log(
        `targetValue : ${targetValue} position, row-position : ${rowIndex}, column-position : ${columnIndex}`
      );
      isExist = true;
    }
  });
});
