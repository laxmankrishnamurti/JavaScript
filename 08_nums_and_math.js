const tradingBalance = 13947273733;
console.log(tradingBalance.toLocaleString('en-IN')); // Output: 13,94,72,73,733

const netBalance = new Number(1928383283);
console.log(netBalance.toLocaleString('en-IN')); // Output: 1,92,83,83,283

console.log(`${tradingBalance.toExponential(2)}`); // Output: 1.39e+10
console.log(`${netBalance.toExponential(3)}`); // Output: 1.928e+9 
