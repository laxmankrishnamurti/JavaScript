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


/*************************************** Assigning Variables using Objects &+***********************************/

let normalUsername = "Bhawan Chauhan";    // primitive string
console.log(`typeofNormalUsername: ${typeof(normalUsername)}`); // string

/**
 * new String() : Returns "object" because the `new` keyword forces JavaScript to instantiate a wrapper object.
 */

let advanceUsername = new String("Laxman Krihsnamurti");
console.log(`advanceUsername: ${typeof(advanceUsername)}`); // object string

let advanceUsername2 = new String("Laxman Krishnamurti");
console.log(`do advanceUsername and advanceUsername2 equal(loose equality): ${advanceUsername2 == advanceUsername}`); // false
console.log(`do advanceUsername and advanceUsername2 equal(strict equality): ${advanceUsername2 === advanceUsername}`); // false

// Any object equality check will give the same result as we have gotten above is "false" because JavaScript compares object references(memory locations), not their contents.


/**
 * Diff. bt. declaring variables with primitive data type and with object
 * 
 * 1. Data Type
 *    - string
 *    - object
 * 
 * 2. Equality Comparisons
 *    - Loose Equality -> true or false
 *    - Strict Equality -> alwats false, irrespective of the content
 * 
 * 3. Adding Custom Properties
 *    - Normal String: We cannot permanently assign custom          peroperties to primitive strings.
 *    - `new String()`: Since it is a standard JavaScript object, we can dynamically attack custom properties or methods to it. 
 */


let standardString = "Mosan Nakbi";
standardString.hasVoteRight = function(age){
      if(age >= 18){
            return true;
      }
      return false;
}

// console.log(`does ${standardString} has voting rights: ${standardString.hasVoteRight(17)}`);

let objectString = new String("Laxman Krishnamurti");
objectString.rightToVote = function(age){
      if(age >= 18){
            return true;
      }
      return false;
}

console.log(`does ${objectString} has voting rights: ${objectString.rightToVote(24)}`);   // true

let anotherObjectString = new String("Sonu Kumar");
console.log(`does ${anotherObjectString} has voting rights: ${objectString.rightToVote(24)}`);  // true

//console.log(`does ${anotherObjectString} has voting rights: ${anotherObjectString.rightToVote(24)}`); // TypeError: anotherObjectString.rightToVote is not a function

anotherObjectString.tradeExecutor = function(tradingBalance, requiredBalance){
      if(tradingBalance >= requiredBalance){
            return "Order Executed Successfully!";
      }

      return "Oops... Insufficient Balance!";
}

console.log(`Order Status: ${anotherObjectString.tradeExecutor(12000, 12500)}`);