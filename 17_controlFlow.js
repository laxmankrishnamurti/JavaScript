if(true){
    // run this instruction
}


if(true){
    // run this instruction
}else {
    // if false, run this instruction
}

// SHORT HAND NOTATION

const balance = 1000;
if(balance > 600) console.log("Sufficient Balance"); // don't use multiple line followed by , (comma) : not recommended

if(true){
    // do this
}else if(true){
    // then do this
}else if(true){
    // do this
}else {
    // finally, do this
}

const user = {
    username: "Hritik Raj",
    age: 23,
    email: "something@gmail.com",
    isLoggedIn: false
}


if(user.age >= 18 && user.isLoggedIn) {
    console.log(`${user.username} can vote`)
}else if(user.age >= 20 && user.isLoggedIn){
    console.log(`${user.username} can vote`)
}else if(user.age < 18){
    console.log(`${user.username} cannot vote`)
}else {
    console.log("Condition not matched!")
}

if(user.age > 18 || user.isLoggedIn){
    console.log(`${user.username} can vote`)
}else {
    console.log(`${user.username} cannot vote`)
}

const user1 = {
    isLoggedIn: true
}

if(user1.isLoggedIn){
    console.log("Account section is activated")
}else {
    console.log("Account section is hidden")
}


const age = 20;

switch (age) {
    case 16:
        console.log("You are a teenager")
        break;
    case 20:
        console.log("You are an adult")
        break;
    default:
        console.log("condition not matched")
        break;
}


// falsy value : false, "", 0, -0, BigInt 0n, null, undefined, NaN 
// truthy value : except falsy value all are truthy value
// truthy value (interesting) : " ", "0", 'false', [], {}, function(){}

const userObj = {};

if(Object.keys(userObj).length > 0){
    // do this
}else{
    // then, do this
}


// NULLISH COALESCING OPERATOR (??): null undefined

let response;
response = 5 ?? 10;
console.log(response);

response = null ?? 'db_response'
console.log(response);

response = "db_response" ?? null;
console.log(response);

response = null ?? undefined ?? "db_response";
console.log(response);

// TERNIARY OPERATOR

const userAge = 15;
userAge >= 18 ? console.log("You can vote") : console.log("You cannot vote");