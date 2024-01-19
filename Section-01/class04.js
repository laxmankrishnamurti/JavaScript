const price = 100;      //Simple number
console.log(typeof price);          //Output : number  (Primitive type number)

//Because of JavaScript is Dynamically typed language so it automatically detect the type of the variable this type of conversion called Implicit Conversion. But, we can Specify the type using Explicit conversion. Like this:-

const productPrice = new Number(100);
console.log(typeof productPrice);             //Output : object (objective type number)

//Convert the number into a String

console.log(typeof productPrice.toString());        //Output : string

//let's include the GST in productPrice

//Precision Value : It is used to show the decimal number values.

const PayableAmount = (productPrice + (productPrice * 0.18));
console.log(PayableAmount);                                     //Output : 118

//for using Precision value let's make it some different price value

const itemPrice = new Number(1237);
// const finalPrice = (itemPrice + (itemPrice * 0.18));
// console.log(finalPrice);                                //Output : 1459.66

const finalPrice = new Number((itemPrice + (itemPrice * 0.18)));
console.log(finalPrice);                                   //Output : 1459.66
console.log(finalPrice.toFixed(2));                       //Output : 1459.66
console.log(finalPrice.toFixed(4));                      //Output : 1459.6600

//Here, fianlPrice have only two digits after the decimal values so that the answer will be the same. toFixed() is used when we have large decimal number after decimal point.

const largeNumber = new Number(12398.2563145);
console.log(largeNumber.toFixed(2));                //Output : 12398.26  (that's the beauty of toFixed() method.)

//toLocalString() method

const hundreds = 100000000000;
console.log(hundreds.toLocaleString());                 //Output : 100,000,000,000     {In International Standard}
console.log(hundreds.toLocaleString('en-IN'));          //Output : 1,00,00,00,00,000   {In Indian Standard}


/************************************************************************************************************************/

//Math Library :- It is used to generate a random numbers between two numbers.

let age = Math.random();                //It will only generate the numbers bt. 0 - 1.
console.log(age);                       //It wil not generate exactly 0 or 1.

//We have also lot of methods to paly with Math Library. Let's play with it.

let age1 = Math.random() * 10;
console.log(age1);                  //Range : { 0 to 10 }
age1 = ((Math.random() * 10) + 1);       //we have added 1 because of avoiding {0.012454} these type of numbers
console.log(age1);          //Range : { 1 - 10 or 10+ }

console.log(Math.ceil(age1));           //for getting highest age {Range : 2 - 11} because 1.2122 is directly goes upto 2 not 1.
console.log(Math.floor(age1));         //for getting lowest age {Range : 1 - 10} because 1.9822 is directly goes to 1 not 2 because floor choose lowest newarest value.

//Let's try to gettings a random number between our Range.

let minRange = 20;
let maxRange = 25;
// console.log((Math.random() * (maxRange - minRange)) + 1);
// console.log((Math.random() * (maxRange - minRange) + 1));            //Range : {1 - 5}
const getMinValue = ((Math.floor(((Math.random() * (maxRange - minRange)) + 1) + minRange)));
console.log(getMinValue);                                                                            //Range : {21-25}
const getMaxValue = ((Math.floor(((Math.random() * (maxRange - minRange)) + 1) + maxRange)));       //Range : {26-30}
console.log(getMaxValue);
const getMaxValue1 = ((Math.ceil(((Math.random() * (maxRange - minRange)) + 1) + maxRange)));      //Range : {27-31}
console.log(getMaxValue1);                                                      