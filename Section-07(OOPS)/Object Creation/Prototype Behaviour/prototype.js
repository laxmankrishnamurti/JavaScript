// Function is also an Object called "Fundamental object".

function square(num){
    return num*num;
}

console.log(square(5))          //Output : 25

//If function is also an object then do we set key and value pairs in it. Let's try to do this...

square.power = 2;
console.log(square.power);          //Output : 2 (as expected)

console.log(square.prototype);      //Output : {constructor: ƒ} but is not same as Node's result.

//let's try to use some it's prototype..

console.log(square.hasOwnProperty('power'));    //Output : true
console.log(square.hasOwnProperty('powered'));  //Output :false  { as expected }
console.log(square.toString());                 //Output : the function is going to be convert in a string.

function createUsers(name, age, origin){
    this.name = name;
    this.age = age;
    this.origin = origin;
}

createUsers.prototype.message = function(){
    return (`Namaste, this is ${this.name} here!!!`);
}

const user1 = new createUsers('Laxman Krishnamurti', 21, 'India');
console.log(user1);
console.log(user1.message());

// Now, the question is that can we use it with other objects which is created with other "constructor function"? Let's check it.........

function customers(name, place, loan){
    this.name = name;
    this.place = place;
    this.loan = loan;
}

const customerOne = new customers('Rahul Shriwastav', 'Gujarat', '1,00,000');
console.log(customerOne);

//Output : customers {name: 'Rahul', place: 'Gujarat', loan: '1,00,000'}

// console.log(customerOne.message());
//Output : Uncaught TypeError: customerOne.message is not a function

console.log(user1.message());   

//Output : Namaste, this is Laxman Krishnamurti here!!!

//Let's create "Universal Prototype"

Object.prototype.sayHello = function(){
    return (`Hello world!!! My name is ${this.name}`);
}

console.log(user1.sayHello());
console.log(customerOne.sayHello());

/**
 * Outputs 
 * 
 * Hello world!!! My name is Laxman Krishnamurti
 * Hello world!!! My name is Rahil Shriwastav
 */

let user = 'Harshad Mehta';
console.log(user.sayHello());   //Output : Hello world!!! My name is undefined

const userInfo  = {
    name : 'Harshad',
    age : 21
}
console.log(userInfo);
console.log(userInfo.sayHello());       //Output : Hello world!!! My name is Harshad

let marks = [45,85,89,69,45,78];
console.log(marks);
console.log(marks.sayHello);

/**
 * Output :: 
     ƒ (){
        return (`Hello world!!! My name is ${this.name}`);
    }
 */


// Note : Universal Prototype means the Prototype is accessable by all other Objects either it is created with object literal, constructor function or class based object.

// The "sayHello" prototype is only for objects not for array or strings. For these we can create a seperate "Universal Prototype".

//let's go....

Array.prototype.hello = function(){
    console.log('Hello world!!! This is an universal prototype for arrays.');
}

//let's use this "Universal Prototype" with array.
marks.hello();      

//Output :: Hello world!!! This is an universal prototype for arrays.

/**
 * Note :: Array, String, Object, Function.....etc do not share it's own "Universal Prototype" with each other.
 */