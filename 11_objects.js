const db_key = "aklkh2k32hskekq2h3kw334";
const user_key = Symbol("db_key");

// object literals
const user = {
    name: "Laxman Krishnamurti",
    age: 23,
    [user_key]: db_key,
    location: "Patna, Bihar",
    email: "laxmankrishnamurti@gmail.com",
    isLoggedIn: true,
    tradingHistory: [129383,1093, -93283, -39737283, 283736]
}

console.log(user)
console.log(`user_location: ${user["location"]}`);

//constructor object
const clientDetails = new Object(
    {
        age: 34
    }
);

clientDetails.greet = function(){
    return `Hello ${this.userFullname.firstName} ${this.userFullname.lastName}`
}

clientDetails.userFullname = {
    firstName: "Rohit",
    lastName: "Chauhan"
}

console.log(clientDetails);
console.log(clientDetails.greet());
console.log(clientDetails.userFullname?.firstName);

// Object combination

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = {obj1, obj2};
// console.log(`Object 3, obj1, 1st key_value :${obj3.obj1[1]}`) wrong way
const obj4 = Object.assign({}, obj1, obj2); // Object.assign(target, source)

const obj5 = {...obj1, ...obj2};    //spread operator (frequency: 90%)

// array of object

const users = [
    {
        name: "Rahul",
        age: 12,
        email: "demo#gmail.com"
    },
    {
        name: "Chitra",
        age: 75,
        email: "demo#gmail.com"
    },
    {
        name: "Rohit",
        age: 34,
        email: "demo#gmail.com"
    },
    {
        name: "Vikram",
        age: 15,
        email: "demo#gmail.com"
    }
];

console.log(Object.keys(clientDetails));
console.log(Object.keys(users[1]));
users.forEach((user) => {
    let count = 0;
    count++;
    //console.log(count);
});

console.log(`clientDetails keys: ${Object.keys(clientDetails)}`);
console.log(`clientDetails values: ${Object.values(clientDetails)}`);
console.log(`clientDetails entries: ${Object.entries(clientDetails)}`);
console.log(`clientDetails isLoggedIn property check: ${Object.hasOwnProperty(clientDetails)}`);