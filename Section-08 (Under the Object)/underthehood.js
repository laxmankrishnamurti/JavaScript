/**
 * Can we change the value of 'PI'?
 */

//ans :- No. Because it's hard to enable of it's "enumerable property".

//Iteration of objects can be disabled. yes, it is possible. Let's see.......

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descripter);

/**
 * Output ::
 * {
        value: 3.141592653589793,
        writable: false,
        enumerable: false,
        configurable: false
    }
 */

// Here, enumerable property is disabled so that's why we can't change it's vlaue. 

const user = {
    name : 'Laxman Krishnamurti',
    age : 21,
    status : "Student"
}

let descripter1 = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descripter1);

/**
 * Output ::
 *  {
        value: 'Laxman Krishnamurti',
        writable: true,
        enumerable: true,
        configurable: true
    }   
 */

//here, we can change it's property. let's try to do this....

Object.defineProperty(user, 'name', {
    writable : false,
    enumerable : false
})

//if we disabled enumarable property for any key's then the key is not iterable. For checking this let's try to run a loop on this object.

for(let key in user){
    console.log(`${key} : ${user[key]}`)
}

/**
 * Output ::
 *          age : 21
 *          status : student
 */

//This is happen because we disabled the enumerable property of the "name" key of user object.

/****************************************** Factory Function **********************************/

//Factory Function :: A factory function is an function that return an object.

let createUser = function(name, age){
    let user = [];
    user.name = name;
    user.age = age;

    user.greetings = function(){
        return (`Hello My name is ${user.name} and I'm ${user.age} years old`);
    };

    return user;

}

const user1 = createUser('Rahul', 25);
console.log(user1);                     //Output : [name: 'Rahul', age: 25, greetings: ƒ]
console.log(user1.greetings());         //Output : Hello My name is Rahul and I'm 25 years old


//Object.assign() :: The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const user2 = {
    name : 'Laxman',
    age : 21,
    gender : 'male'
}

const user3 = {
    name : 'Rahul',
    age : 25,
    gender: 'male'
}

let combine = Object.assign(user2, user3);
console.log(combine);

//Output : {name: 'Rahul', age: 25, gender: 'male'}

// If all keys and value will be same then the last object's key & property will considered.

let combine2 = Object.assign(user3,user2);
console.log(combine2);

//Output : {name: 'Rahul', age: 25, gender: 'male'}

//It will remain the same.