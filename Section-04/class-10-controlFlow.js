/**
 * Control flow :- Any program is run on a given certain condition this is called control flow.
 */

//if-else condition :- if condition is true then do this, if not then do that.

let voterAge = 18;
if(voterAge >= 18){
    console.log('You can eligible for voting');
}else{
    console.log('You are below 18 so you can not vote.');
}

//Output :- You can eligible for voting.

//Conparision Operator :: >, <, <=, >=, ==, ===, !=, !==

//Nested if-else statement

const number = 23;
if(number > 0){
    console.log('Positive Number');
    if(number % 2 == 0){
        console.log('Even Number');
    }else{
        console.log('Odd Number');
    }
}else{
    console.log('Negative Number');
}

//Output : Positive Number, Odd Number

const userName = 'Laxman Krishnamurti';
const creditDetails = false;
if(userName || creditDetails){
    console.log('You can logIn');
}else{
    console.log('You can not logIn')
}

//Output : You can logIn

/**
 * Switch statement :- It is used to enhance code readability of if-else statement. 
 */

let day = 0;
switch(day){
    case 0 : 
        console.log('Monday');
        break;

    case 1 : 
        console.log('Tuesday');
        break;

    case 2 : 
        console.log('Wedmesdat');
        break;
        
    case 3 : 
        console.log('Thursday');
        break;

    default :
        console.log('Invalid Input age');
}

//Output : Monday

/**
 * Break :- Break is used to break control flow when a particular condition is matched.
 * Case-sensitivity is important in switch statement.
 * Control flow is mainly based on true and false statement so here come's Truthy and falsy vlaue.
 */

//Falsy value :: false, 0, -0, 0n {bigInt}, ""{empty string}, null, undefined, NaN{Not a number}
//Truthy value :: "0", "false", " "{space bt. quotes}, [], {}, function(){}.......etc and all except falsy value.

//Check whether the input array or object is empty or not?

const numbers = [];
if(numbers.length === 0){
    console.log('Empty Array');
}else{
    console.log('Not Empty');
}

//Output : Empty Array

const userInfo = {};
if(Object.keys(userInfo).length === 0){
    console.log('Empty object');
}else{
    console.log('Not Empty');
}

//Output : Empty Object

//Interesting Comparision Output 

console.log(false == 0);
console.log(false == "");
console.log(0 == "");      

//All Output : true

/**
 * If Database output is null or undefined then how we can tackle that problem.
 * 
 * ans :- NCO (Nullish Coalesing Operator)
 */

let value;
value = 10 ?? 23;
console.log(value);     //Output : 10
let value2;
value2 = null ?? 50;
console.log(value2);        //Output : 50
let value3;
value3 = undefined ?? 60;
console.log(value3);            //Output : 60
let value4;
value4 = 15 ?? 18 ?? 19;
console.log(value4);            //Output : 15


//Note :- Nullish coalesing operator is different from Ternary operator.
//Ternary Operator is used like as a single-line if-else statement

let isLoggedIn = true;
isLoggedIn ? console.log('User logged In') : console.log('User is logged out');

//Output : User logged In