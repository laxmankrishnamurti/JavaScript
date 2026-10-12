/**
 * Data Types
 *    - Primitive (Call by value)
 *          - String
 *          - Number
 *          - BigInt
 *          - Boolean
 *          - null
 *          - undefined
 *          - Symbol (used to make unique value)
 * 
 *    - Reference (Non-Primitive - Call by reference)
 *          - Array
 *          - Objects
 *          - Functions
 */


const userId = Symbol("Laxman Krishnamurti");
const anotherUserid = Symbol("Laxman Krishnamurti");

console.log(userId === anotherUserid); // Output : false

const segmentList = ["Long Term Investing", "Short Term Investing", "Intraday", "Futures", "Options"];
const userDetails = {
      username: "Laxman Krishnamurti",
      userId: "YVR983",
      userEmail: "demo@gmail.com"
}

function tradeExecutor(tickerName, tickerQuantity, tickerPrice, tickerRequiredMoney){
      if(userTradeAccountBalance > tickerRequiredMoney){
            return "Order Placed successfully"
      }else{
            return "Insufficient Balance, Please add money into your trading account"
      }
}

console.log(typeof(segmentList));
console.log(typeof(userDetails));
console.log(typeof(tradeExecutor));