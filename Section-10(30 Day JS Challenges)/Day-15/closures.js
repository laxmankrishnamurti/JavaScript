/**
 * What is Closure
 *
 * A closure is a function that retains access to its lexical scope even when the function is executed outside that scope. Closures are created every time, a function is created, at function creation time.
 */

/**
 *Activity - 01
 */

//Task - 01

function parent() {
  let parentLexicalScopeValue = "Lexical scope value";
  return () => {
    console.log(parentLexicalScopeValue);
  };
}

const ret = parent();
ret(); //Output : Lexical scope value

//Task - 02

function getCounterValue() {
  let counter = 0;
  return {
    increment: function () {
      counter += 1;
    },
    getCounterValue: function () {
      console.log(counter);
    },
  };
}

const firstCount = getCounterValue();
firstCount.increment();
firstCount.increment();
firstCount.increment();
firstCount.increment();
firstCount.increment();
firstCount.increment();
firstCount.getCounterValue();

/**
 * Activity - 02
 */

//Task - 03

/*
Wrong Implementation

function generateUniqueId() {
  let str = "0123456789";
  let uniqueId = "";
  for (let i = 0; i < 8; i++) {
    let randomNumber = Math.ceil(Math.random() * str.length);
    let randomChar = str.charAt(randomNumber);
    uniqueId += randomChar;
  }

  return {
    prevId: function () {
      return uniqueId;
    },
    incrementedId: function () {
      return (uniqueId += 1);
    },
  };
}

const getId = generateUniqueId();
console.log(getId.prevId());
console.log(getId.incrementedId());
*/

function generatUniqueId() {
  let id = 0;
  return function () {
    id += 1;
    return id.toString().padStart(8, 0);
  };
}

const id = generatUniqueId();
console.log("id is :", id());
console.log("id is :", id());
console.log("id is :", id());
console.log("id is :", id());

//Task - 04

function greetings(name) {
  let username = name;
  return function () {
    console.log(`Hello ${username}`);
  };
}

let greets = greetings("Laxman");
greets();

/**
 * Activity - 03
 */

//Task - 05

function closureInLoop() {
  let arrayOfFunctions = [];
  let names = ["Laxman", "Kawya", "Pallavi"];
  for (let i = 0; i < 3; i++) {
    arrayOfFunctions.push(
      (function (index) {
        return function () {
          console.log(`I'm on ${index} position with name :: ${names[i]}`);
        };
      })(i)
    );
  }

  return arrayOfFunctions;
}

let allFunctions = closureInLoop();
allFunctions[0]();
allFunctions[1]();
allFunctions[2]();

/**
 * Activity - 04
 */

//Task - 06

function itemManager() {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
      console.log(`Added ${item}`);
    },

    removeItem: function (item) {
      let itemPosition = items.indexOf(item);
      if (itemPosition) {
        items.splice(itemPosition, 1);
        console.log(`Removed : ${item}`);
      } else {
        console.log(`${item} not found`);
      }
    },

    getAllItems: function () {
      console.log(`All items : ${items}`);
    },
  };
}

const manager = itemManager();
manager.addItem("Goggles");
manager.addItem("Chair");
manager.addItem("Books");
manager.addItem("Mouse");
manager.getAllItems();

manager.removeItem("Chair");
manager.getAllItems();

/**
 * Avtivit - 05
 */

//Task - 07 & 08

function memoize(fun) {
  let cache = {};

  return function (args) {
    let key = JSON.stringify(args);

    if (cache[key] !== undefined) {
      console.log(`Fetching from cache for agrs : ${args}`);
      return cache[args];
    }

    let result = fun(args);
    cache[key] = result;

    console.log(`Computing result for args : ${args}`);
    return result;
  };
}

function getFactorial(num) {
  if (num == 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
}

const memoizedFunction = memoize(getFactorial);
let result = memoizedFunction(5);
console.log(`Factorial of 5 is : ${result}`);
let result2 = memoizedFunction(10);
console.log(`Factorial of 10 is : ${result}`);
let result3 = memoizedFunction(15);
console.log(`Factorial of 15 is : ${result}`);

let result4 = memoizedFunction(15);
console.log(`Factorial of 15 is : ${result}`);

let result5 = memoizedFunction(5);
console.log(`Factorial of 5 is : ${result}`);
