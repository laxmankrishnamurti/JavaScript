const arr1 = [1,2,3,4,5,];
const arr2 = new Array("Rahul", "Vikash", "Vikram", "Raju");

console.log(arr1.push(6));
console.log(arr2.pop());

arr1.unshift(0);
console.log(arr1);
arr1.shift();
console.log(arr1);

console.log(arr2.includes("Laxman"));
console.log(arr2.indexOf("Laxman"));

console.log(arr2);
console.log(`arr2 join: ${arr2.join()}`);

console.log(`arr1 : ${arr1}`);

const arr1_a = arr1.slice(1,2);     // deep copy
console.log(`arr1_a: ${arr1_a}`);
console.log(`arr1 after slice: ${arr1}`)

const arr1_b = arr1.splice(1, 2);   // shallow copy
console.log(`arr1_b: ${arr1_b}`);
console.log(`arr1 after splice: ${arr1}`)

