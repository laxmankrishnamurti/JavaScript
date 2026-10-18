const tradingBalance = 13947273733;
//console.log(tradingBalance.toLocaleString('en-IN')); // Output: 13,94,72,73,733

const netBalance = new Number(1928383283);
//console.log(netBalance.toLocaleString('en-IN')); // Output: 1,92,83,83,283

//console.log(`${tradingBalance.toExponential(2)}`); // Output: 1.39e+10
//console.log(`${netBalance.toExponential(3)}`); // Output: 1.928e+9 
//console.log(`${netBalance.toExponential(5)}`);  // 1.92838e+9 

const float1 = 155426.54896;
//console.log(`toFixed: ${float1.toFixed(1)}`);
//console.log(`toFixed: ${float1.toFixed(2)}`);
//console.log(`toFixed: ${float1.toFixed()}`);
//console.log(`toPrecision: ${float1.toPrecision(1)}`);
//console.log(`toPrecision: ${float1.toPrecision(6)}`);
//console.log(`toPrecision: ${float1.toPrecision(7)}`);
//console.log(`toPrecision: ${float1.toPrecision(8)}`);
//console.log(`toPrecision: ${float1.toPrecision(9)}`);

//console.log(`toString: ${typeof(netBalance.toString())}`);
// console.log(`valueOf: ${netBalance.valueOf()}`);


/************************************* MATH **********************************/

console.log("MATH OBJECT");
console.log(`ceil: ${Math.ceil(Math.random() * 10)}`);
console.log(`floor: ${Math.floor(Math.random() * 10)}`);
console.log(`B_1_10: ${(Math.random() * 10) + 1}`);
console.log(Math.min);
console.log(Math.min(1,2,3,4,5,6,7,8));
console.log(Math.max(1,2,3,4,5,6,7,8));

const min = 55;
const max = 75;
console.log(`between_55_75: ${(Math.random() * (max - min)) + min}`);
console.log(`above_75: ${(Math.random() * (max - min)) + max}`);

console.log(`abs: ${Math.abs(-5656)}`);
console.log(`cbrt_of_27: ${Math.cbrt(27)}`);
console.log(`pow_10_2: ${Math.pow(10,2)}`);
console.log(`sqrt_of_81: ${Math.sqrt(81)}`);
console.log(`sin_1: ${Math.sin(1)}`);
console.log(`sin_1: ${Math.sin(90)}`);