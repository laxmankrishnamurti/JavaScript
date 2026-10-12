/**
 * Whenever you're comparing two values make sure their data type shold be the same. 
 */

console.log(2 > 3);
console.log(2 < 3);
console.log(2 >= 3);
console.log(2 <= 3);
console.log(2 != 3);
console.log(!(2 > 3));

// Avoid such type of comparison

console.log("1" > 2);
console.log("02" < 3);

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true (Because comparison check converts null to a number, treating it as 0.)
console.log(null === 0);

console.log("undefined log");
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined === 0); // strict check (checks value and data types)
console.log(undefined == undefined);
console.log(undefined === undefined);     // strict check 