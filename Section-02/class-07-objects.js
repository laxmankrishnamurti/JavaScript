/**
 * Objects :- An objects are a varible where we can store data in the form of key-value pairs.
 * 
 * Objects are Non-Primitive data type.
 * There are two ways to declare an object :- (1). Object literals (2). Using Constructor function/mehtods
 */

//By, Object Literals

const userInfo = {
    name : 'Laxman',
    age : 21,
    email : 'freelancing.laxman@gmail.com',
    isLoggedIn : false
}

console.log(userInfo);

//Output : {name: 'Laxman', age: 21, email: 'freelancing.laxman@gmail.com', isLoggedIn: false}

//add new key-vlaues into the object

userInfo.height = '160cm';
console.log(userInfo.height);           //Output : 160cm

userInfo["Full Name"] = 'Harshad Mehta';
console.log(userInfo['Full Name']);             //Output : Harshad Mehta

//Note:- Spacing is not allowed in the key-name so that's why we store it into quots.

/**
 * Q :: Create a symbol and then store it into an object.
 */

const mySym = Symbol('secretCode');
userInfo[mySym] = 'laxmExit';
console.log(userInfo);
console.log(userInfo[mySym]);

//Note :- We only access the symbol by the variable name which we assigned while creating the symbol.

//How to freez the object so that anyone can not chagne it's key-value pairs.

Object.freeze(userInfo);
console.log(userInfo);

//Output : {name: 'Laxman', age: 21, email: 'freelancing.laxman@gmail.com', isLoggedIn: false, height: '160cm', …}

//let's try to change the name again.

userInfo.name = 'Laxman Krishnamurti';
console.log(userInfo.name);                 //Output : Laxman

/*********************************************************** Methods/Functions in an Object *******************************/

/**
 * Methods : Function inside an object called methods.
 */

const userDetails = {
    name : "Laxman Krishnamurti",
    age : 22
}

userDetails.greetings = function(){
    console.log(`Namaste ${this.name}`); 
}

console.log(userDetails);                   //Output : {name: 'Laxman Krishnamurti', age: 22, greetings: ƒ}
userDetails.greetings();                    //Output : Namaste Laxman Krishnamurti

/**
 * this :- When we refered the same objects and we want to access the object key-value pairs inside the object then we use this keyword. this has access of all the key-value pairs.
 */

