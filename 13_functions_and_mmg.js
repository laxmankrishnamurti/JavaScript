function greetUser (user){
    console.log(`Hello ${user}`);
}

greetUser("Half Moon");

function addTwoNumbers (num1, num2){
    let result = num1 + num2;
    return result;
}

let result = addTwoNumbers(1, 4);
console.log("result", result);

function userLoggedInMsg(username = "John"){
    if(!username){
        console.log("Please enter a username");
        return;
    }

    console.log(`${username}, just logged in`);
}

userLoggedInMsg("Laxman Krishnamurti");