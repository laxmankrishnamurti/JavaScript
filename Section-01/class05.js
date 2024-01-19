//Date-Library :- It is used to configure Date and time.

let todayStatus = new Date();
console.log(todayStatus);           //Output : 2024-01-10T05:32:54.435Z

//Let's Play with Date

console.log(todayStatus.toDateString());        //Output : Wed Jan 10 2024
let isoDate = (todayStatus.toISOString());        //Output : 2024-01-10T05:37:23.451Z

//Note :- The toISOString() method converts a Date object into a string, using the ISO standard.
//ISO :- International Organization for Standardization

let jsonDate = (todayStatus.toJSON());              //Output : 2024-01-10T05:40:42.992Z
console.log(isoDate === jsonDate);                  //Output : true

/**
 * About JSON files ::
 *  JSON stands for JavaScript Object Notation
    JSON is a lightweight format for storing and transporting data
    JSON is often used when data is sent from a server to a web page
    JSON is "self-describing" and easy to understand
 */

console.log(todayStatus.toLocaleString());             //Output : 10/01/2024, 11:15:50
console.log(todayStatus.toLocaleDateString());          //Output : 10/01/2024

let myDate = new Date(2024,1,4);                    //(format : yy/mm/dd)
console.log(myDate.toDateString());                 //Output : Sun Feb 04 2024
console.log(myDate.toLocaleString());              //Output : 04/02/2024, 00:00:00

//Months and weeks are start from 0th index in terms of creating a specific date.

/**
 * What is Time-stamp?
 * 
 * ans :- Time stamp is used on that moment when a user fire or hit an query to capture that time moment.
 * 
 * Ex :- Hotel booking app, Ticket Booking app, Payment Credit or Debit........etc
 */

let payAmount = new Date();
console.log(payAmount.toDateString());      //Output : Wed Jan 10 2024

let paymentTimeStamp = Date.now();
let paymentTime = (paymentTimeStamp);              //Output : 1704866834937
paymentTimeStamp = paymentTimeStamp.toLocaleString('en-IN');
console.log(paymentTimeStamp);              //Output : 17,04,86,69,12,876

//Date.now() :- calculate milisecond vlaue from Jan 1 1970.

let debitTime = new Date(2024,1,4);
console.log(debitTime);            //Output : Sun Feb 04 2024 00:00:00 GMT+0530 (India Standard Time)
//get Time stamp of debit
let fetchDebitTime = (debitTime.getTime());           //Output : 1706985000000

let timeGap = fetchDebitTime - paymentTime;
console.log(timeGap);                                //Output : 2117514057

//Note : Comparison always should be in miliSecond.     (1 Second = 1000 miliSecond)

let creditTime = new Date();
console.log(creditTime.toDateString());             //Output : Wed Jan 10 2024
console.log(creditTime.toJSON());                   //Output : 2024-01-10T06:23:18.709Z

//for Detail analysis of creditTime

console.log(creditTime.getDate());                  //Output : 10
console.log(creditTime.getDay());                  //Output : 3
console.log(creditTime.getFullYear());             //Output : 2024

/**
 * More methods like :- getHours(), getMiliSeconds(), getSecond(), getMinutes()......etc
 */