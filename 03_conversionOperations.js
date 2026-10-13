let priceFluctuation = "1029.993883847238948";
console.log(typeof priceFluctuation);
console.log(typeof(priceFluctuation));  // method

let currentPrice = Number(priceFluctuation);
console.log(currentPrice);
console.log(typeof currentPrice);

// NaN (Not-a-Number)
let username = "laxmankrishnamurti_123";
console.log("Type of username:", typeof(username));
username = Number(username);
console.log("username", username);
console.log("Type of username:", typeof(username));

console.log("Type of NaN:", typeof(NaN));

// null

let futureAndOptionSegmentStatus = null;
console.log("value of futureAndOptionSegmentStatus:", futureAndOptionSegmentStatus);
console.log("Type of f/o segment:", typeof(futureAndOptionSegmentStatus));

futureAndOptionSegmentStatus = Number(futureAndOptionSegmentStatus);
console.log("value of futureAndOptionSegmentStatus after numeric conversion:", futureAndOptionSegmentStatus);
console.log("Type of f/o segment after numeric conversion:", typeof(futureAndOptionSegmentStatus));

// boolean value number conversion

let isLoggedIn = false;
isLoggedIn = Number(isLoggedIn);
console.log("isLoggedInValue: ", isLoggedIn);
console.log("type of isLoggedIn after numeric conversion:", typeof(isLoggedIn));

/**
 * Other type conversion
 *    - String()
 *    - Boolean()
 */


// ********************************************       OPERATIONS        ********************************************

let netTradingStatus = 3948;
netTradingStatus = -netTradingStatus;
console.log("value of netTradingStatus",netTradingStatus);
console.log("type of netTradingStatus:",typeof(netTradingStatus));

// console.log(2+2);
// console.log(20-2);
// console.log(20*2);
// console.log(20**2);
// console.log(20/2);
// console.log(20%2);

console.log("Hello" + "World!");
console.log("20" + 3);
console.log("1" + 5 + 5);
console.log(5 + 10 + "1");

console.log(+true);
console.log(+"");

let netProfit = 10000;
++netProfit;
netProfit++;
console.log("netProfit:", netProfit);