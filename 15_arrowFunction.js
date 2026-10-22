// this : refers current context
// in node, this value would be {}
// in browser, this value would be 'window object'

const user = {
    username: "Laxman Krishnamurti",
    userId: "KDKJ1992",
    age: 24,
    welcomeMessage: function() {
        console.log(`Hello ${this.username}`);
    },
    getAge: () => {     // in arrow function, this doesn't hold the current context
        console.log(this.age);
    }
}

user.welcomeMessage();
user.getAge();  // undefined

function printThisFunction(){
    console.log(this);
}

printThisFunction();
console.log(`this value without a function(in global scope): ${this}`); // [object Object]

const sayHello = function(user){
    console.log(`Hello ${user.username}!`);
}

sayHello({
    username: "Harshad Mehta"
})

// ARROW FUNCTION

console.log("ARROW FUNCTION");

const addTwo = (num1, num2) => {
    return num1 + num2; // explicit return
}

console.log(`sum: ${addTwo(1,2)}`);

const subtractTwo = (big, small) => (big - small); // implicit return

console.log(`subtracted: ${subtractTwo(100, 50)}`);

const returnObject = () => ({username: "Hindenburg"});
console.log("returned Object:", returnObject());

// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

