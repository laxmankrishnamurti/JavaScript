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

// n... parameters

function calculateCartPrice(defaultProduct,  ...cartProducts){ // rest operators
    console.log(`default product: ${defaultProduct}`);
    return cartProducts;
}

const cartProducts = calculateCartPrice("Lenovo Tab", "Lenovo Laptop", "Lenovo Speaker");
console.log("cartProducts", cartProducts);
console.log(`is catProducts an array: ${Array.isArray(cartProducts)}`);

// handle Object in Function

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and age is ${anyObject.age}`);
}

handleObject({
    username: "Laxman Krishnamurti",
    age: 24
})

// handle array in function

function returnSecondValue(arr){
    return arr[1];
}

console.log(`second value: ${returnSecondValue([1,2,3,4,5,6])}`);