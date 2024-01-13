/**
 * Constructor :- When a function is called with the 'new' keyword, the function will be used as a constructor.
 */

//Constructor Object

const constructorObject = new Object();
constructorObject.name = 'Laxman Krishnamurti';
constructorObject.age = 21;
constructorObject.height = '160cm';
console.log(constructorObject);

//Output : {name: 'Laxman Krishnamurti', age: 21, height: '160cm'}  
//Object which is created by using new called Constructor object;

//Let's track the external entries in the object.

console.log(Object.entries(constructorObject));     //Output : (3) [Array(2), Array(2), Array(2)] : {called Nested Array structure}

/**
 * Output : [
                [ 'name', 'Laxman Krishnamurti' ],
                [ 'age', 21 ],
                [ 'height', '160cm' ]
            ]
 */

//Nested object property

const userInfo = {
    id : 'laxExit',
    age : 'male',
    isLoggedIn : false,
    name : {
        fullName : {
            firstName : "Laxman",
            lastName : 'Krishnamurti'
        }
    },
    email : 'freelancing.laxman@gmail.com'
}

console.log(userInfo);

//Output : {id: 'laxExit', age: 'male', isLoggedIn: false, name: {…}, email: 'freelancing.laxman@gmail.com'}

//let's access the nested property

console.log(userInfo.name?.fullName.firstName);             //Output : Laxman
console.log(userInfo.named?.fullName.firstName);            //Output : undefined {because, there is no any named property is available in that object.}

//Object Concatination{means combine two or more objects in a single object}

//Using object.assing(target, source)

const user1 = {
    name : 'Vikram Kumar',
    age : 13,
    gender : 'male'
}

const user2 = {
    name : 'Fruti rathore',
    age : 17,
    gender : 'female'
}

const allUsers = Object.assign({}, user1, user2);
console.log(allUsers);

//Output : {name: 'Fruti rathore', age: 17, gender: 'female'} because when both of objects has the same key-value then the last object key-value property is assigned to the new object.

user1.height = '160cm',
console.log(allUsers);

const allUsers1 = Object.assign({}, user1, user2);
console.log(allUsers1);

//Output : {name: 'Fruti rathore', age: 17, gender: 'female', height: '160cm'}
//Instead of using this mehtod we use Spread Operator for concatination.

const allUsers2 = {...user1, user2};
console.log(allUsers2);

//Output : {name: 'Vikram Kumar', age: 13, gender: 'male', height: '160cm', user2: {…}}

/**
 * Notes :- When the data comes from the server or Database then the data is in the form of Array Object in JSON format then how we can access that?
 */

//Array Object

const users = [
    {id : 1, name : 'Anjali Jain', gender : 'female'},
    {id : 2, name : 'Ranjan Rajiya Sultan', gender : 'female', height : '165cm'},
    {id : 3, name : 'Pallavi Jain', gender : 'female'}
]

const extUser1 = users[0];
console.log(extUser1);             //Output : {id: 1, name: 'Anjali Jain', gender: 'female'}
console.log(users[2].name);       //Output : Pallavi Jain

//Extract keys from an object and stored it in an array.

const keyStorage = Object.keys(users[0]);
console.log(keyStorage);                        //Output : (3) ['id', 'name', 'gender']

//let's check whether a property is exist in the array or not?

console.log(users[0].hasOwnProperty('height'));                 //Output : false  {booleans value}
console.log(users[1].hasOwnProperty('height'));                //Output : true


//Object Destructuring

const {user1Name} = user1;
console.log(user1Name);                 //Output : undefined. because, we can only destrucure an object key-value based upon their key-name only at starging point. But, after that we can chage it's name.

const {name : userName} = user1;
console.log(userName);                                  //Output : Vikram Kumar


//Array inside an object

const randomUser = {
    name : 'Harshad Mehta',
    age : 22, 
    gender : 'male',
    marks : [95,98,91,85,78],
    email : 'harshadmehta@gmail.com'
}

console.log(randomUser.marks);              //Output : (5) [95, 98, 91, 85, 78]
console.log(randomUser.marks.push(100,88));      //Output : 7
console.log(randomUser.marks);                  //Output : (7) [95, 98, 91, 85, 78, 100, 88]

//We can use all array's methods in this array.