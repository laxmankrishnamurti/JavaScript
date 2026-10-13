// Constants

let tradingBalance = 100000;
const clientId = 790;
let accountHoldnerName = "Vikram Dhanush";
var email = "vikramdhanush@gmail.com";

/**
 * Prefer not to use "var" because of issue in block scope and functional scope
 */

tradingBalance = 50000;
// clientId = 381;
accountHoldnerName = "Ranjani Krishnamurti";

console.log(tradingBalance);
console.log(accountHoldnerName);
console.log(clientId);

console.table([clientId, accountHoldnerName, tradingBalance]);

let derivativeSegmentStatus;
console.log(derivativeSegmentStatus);