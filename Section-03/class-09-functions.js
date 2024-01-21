//functions :- Is used to the same task agian and agian.
/**
 * There are three types of function Notation and each have their own uses.
 * (1). Function Declaration
 * (2). Function Expression
 * (3). Arrow Function
 */

//Function Declaration
function printHello(){
    console.log('Hello world');
    return 0;
}

printHello();                           //Output : Hello world

//Function Expression
const printHello1 = function(){
    console.log('Hello world');
    return 0;
}
printHello1();                         //Output : Hello world

//Arrow Function
const printHello2 = () => {
    console.log('Hello world');
    return 0;
}
printHello2();                         //Output : Hello world

//Parameter & Argument

/**
 * Parameter :- The variable which we create in function to pass the value into function is called parameter.
 * 
 * Argument :- The value which is taken by the function is called Argument.
 */

const addNumbers = (num1, num2) => {
    let sum = num1 + num2;
    return sum;
}

console.log(addNumbers(30, 40));                         //Output : 70

//Rest Parameter :- It stores the extra arguments and returns it in the form of an Array.

const totalPercentage = (math, science, socialScience, ...extraMarks) => {
    let MSS = (Math.floor(((math + science + socialScience) * 100) / 300 ));
    console.log(`Extra Marks list : ${extraMarks}`);
    return MSS;
}

console.log(totalPercentage(95, 91, 85, 78, 96));                     //Output : 90  & Extra Marks list : 78,96

//We can also pass Objects and Array into a function and access it by thier own accessing methods.

const userInfo = {
    name : 'Laxman Krishnamurti',
    age : 21,
    email : 'freelancing.laxman@gmail.com',
    height : '160cm'
}

const getUserInfo = (user) => {
    console.log(user);   //Output : {name: 'Laxman Krishnamurti', age: 21, email: 'freelancing.laxman@gmail.com', height: '160cm'}
    console.log(user.name);             //Output : Laxman Krishnamurti

    return 0;
}

getUserInfo(userInfo);

const studentMarks = [10,,20,25,27,30,16,24,26];

const getMarks = (marks) => {
    console.log(marks[2]);                                      //Output : 20

    return 0;
}

getMarks(studentMarks);

/******************************************************** Basic Info end *******************************************/

/**
 * Scope :- The place where a variable exist called scope. There are two scopes in JavaScript.
 * (1). Global Scope
 * (2). Lexical Scope / Block Scope
 */

//In short, curly braces is called Scope.
/**
 * Global Scope :- The variable which is declared outside of curly braces called the variable is in Global Scope.
 * Lexical Scope :- The variable which is declared into curly braces called the variable is in Lexical Scope.
 */

//Scope exist because of the data type of Varibales.
//Note :- Lexical scope can use the Global scope values but Global scope can't do the same. {also allow in Nested Funtion}.
//Node's global scope is different from browser's Global scope.
//We should not use Var keyword to declare a variable. If it is necessary then we can but otherwise we should simply ignore it.
//Execution of code happens line-by-line.

/**
 * this :- It is used when we refer to the Current context.
 */

console.log(this);

//Browser Output : Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//Node Output : {} = An Empty object

/**
 * Global Object of 
 *          Browser is : window object
 *          node, deno, bun.... any standalone engine : {} = Empty Object
 */

const printName = function(name){
    console.log(this.name);                 //Output : blank. Because, we didn't pass any object into the function as an argument so that's why this dosen't refeer to anyone. The name parameter is a different thing it is just like a variable name not an object.
    console.log(this);
    return 0;
}

printName('Laxman');

/**2nd Output : Object [global] {
                 global: [Circular],
                clearInterval: [Function: clearInterval],
                clearTimeout: [Function: clearTimeout],
                setInterval: [Function: setInterval],
                setTimeout: [Function: setTimeout] {
                    [Symbol(nodejs.util.promisify.custom)]: [Function]
                },
                queueMicrotask: [Function: queueMicrotask],
                clearImmediate: [Function: clearImmediate],
                setImmediate: [Function: setImmediate] {
                    [Symbol(nodejs.util.promisify.custom)]: [Function]
                }
                }
*/

//Hence, we can't access this keyword like this. Generally this is used when we have object.


/********************************************************* Scope ******************************************************/

//Implicit Return :- We don't need to write return statement if we have single line statement.

const addNum = (num1, num2) => (num1 + num2);
console.log(addNum(10,20));                             //Output : 30

//Implicit return of an object

const returnUserName = () => ({name : 'Laxman Krishnamurti'});
console.log(returnUserName().name);             //Output : Laxman Krishnamurti

/**
 * IIFE :- Immediately invoked function Expression.
 * 
 * The function which is immediately invoked called IIFE function. We execute that function immediately because of preventing of the function from Global Scope.
 */

//like implicit return

//Named IIFE
(function printName1(){
    console.log('Hello world');
})();                                               //Output : Hello world

//unNamed IIFE
((name) => {
    console.log(`${name} welcome to our Website`);
})('Laxman');                                           //Output : Laxman welcome to our website

/******************************************************************************************************************* */

/**
 * Execution Context in JavaScript :- Execution context means how the code is going to be execute in JavaScript. There are two Execution context in JavaScipt.
 * (1). Global Execution Context
 * (2). Functional Execution Context :- Function creates the execution context
 * 
 * and then, eveery context has two phases.
 * (1). Memory creation phase
 * (2). Code Execution Phase
 * 
 * Global Execution context refers to "this".
 * 
 * After functional Execution context, function returns it's value to the global executional context. After that the function Execution context will be deleted.
 */