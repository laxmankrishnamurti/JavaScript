//Conversion & Operation

let age = 21;
console.log(typeof age);        // {typeof} is used to check type of the variable.

//Output : number

let ageInString = String(age);          //{String} is a pre-written functions(library), Used for conversion of data-types.
console.log(ageInString);
console.log(typeof ageInString);

/**
 * Output : 
 * 21
 * string
 */

let age1 = "21XYZ";
console.log(typeof age1);           //Output : string

let ageInNumber = Number(age1);
console.log(ageInNumber);       //Output : NaN(Not a Number) but,
console.log(typeof ageInNumber);    //Output : number      

/**
 * Note : It means if we converted a string into number that dosen't mean that we actually going to getting a number. This create problems while writing Logic(Backend). To make sure that the number we have gotten is actually a number, write logic for it in Backend. So that the value is proper a number not anything else because if don't set a type checking then we are going to store a wrong data in our Database.
 * 
 * Here comes "TypeScript" the reason behind creating "TypeScript" is basically Type checking in JavaScript. 
 */

//Let's practice the same concept on "null" and "undefined"

let age2 = null;
console.log(typeof age2);           //Output : object

let getNull = Number(age2);
console.log(typeof getNull);        //Output : number
console.log(getNull);              //Output : 0

let age3 = undefined;
console.log(typeof age3);       //Output : undefined

let getUndefined = Number(age3);
console.log(getUndefined);          //Output : NaN (Not a number)
console.log(typeof getUndefined);   //Output : number

//null : It dosen't mean that it is equal to 0 or blank string. null represent an empty value.
//undefined : It means that we already declared a variable but we don't assign it's value yet.

//Let's Practice on Boolean.

let isLoggedIn = true;
console.log(isLoggedIn);                //Output : true
console.log(typeof isLoggedIn);         //Output : boolean

let checkUserStatus = Number(isLoggedIn);
console.log(checkUserStatus);               //Output : 1
console.log(typeof checkUserStatus);        //Output : number

let isLoggedIn1 = false;
console.log(isLoggedIn1);                   //Output : false
console.log(typeof isLoggedIn1);            //Output : boolean

let checkUserStatus1 = Number(isLoggedIn1);
console.log(checkUserStatus1);              //Output : 0
console.log(typeof checkUserStatus1);       //Output : number

let userCheck = String(isLoggedIn1);
console.log(userCheck);                     //Output : false
console.log(typeof userCheck);              //Output : string

let userCheck1 = "logIn";
console.log(typeof userCheck1);            //Output : string

let getStatus = Number(userCheck1);
console.log(getStatus);                     //Output : NaN 
console.log(typeof getStatus);              //Output : number

//Conversion in Boolean

let isLoggedIn2 = 1;
let checkStatus = Boolean(isLoggedIn);
console.log(checkStatus);                   //Output : true
console.log(typeof checkStatus);            //Output : boolean

let isLoggedIn3 = "";
console.log(typeof isLoggedIn3);            //Output : string

let checkStatus1 = Number(isLoggedIn3);
console.log(checkStatus1);                  //Output : 0
console.log(typeof checkStatus1);           //Output : number

//Operations ::

console.log(2 * 2 * 2);         //Output : 8
console.log(2 * 3 + 5);         //Output : 11
console.log(2 + 2 / 2);         //Output : 3
console.log(2 <= 5);           //Output : true
console.log(21 >= 85);         //Output : false

//Note : These type of operations is not allowed because of code redability issue. Code Readability should be high, it is very essential for programmers.

//Let's try on null & undefined

console.log(null === undefined);            //Output : false
console.log(null < undefined);              //Output : false
console.log(null > undefined);              //Output : false
console.log(null <= undefined);             //Output : false
console.log(null >= undefined);             //Output : false

//But,

console.log(null == undefined);            //Output : true

/**
 * Note :: When we define a variable to "undefined" then we are trying to convey that the variable exist but the initialized value of the varibale is "undefined", this is not equal as the variable value which have null value. When we define a variable to "null" then we are trying to convey that the variable is empty.
 */

//Leet's check is null is 0 or something else.

console.log(null == 0);             //Output : false
console.log(null < 0);              //Output : false
console.log(null > 0);             //Output : false
console.log(null === 0);           //Output : false

//But,

console.log(null <= 0);            //Output : true
console.log(null >= 0);            //Output : true

/**
 * Note :- This happens because the equality check(==,===) and comparisons checks(>,<,<=,>=) are work differenty. Comparison convert null into a numebr, treating it as 0.
 */