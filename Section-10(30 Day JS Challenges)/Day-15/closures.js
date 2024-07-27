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
  for (let i = 0; i < 3; i++) {
    arrayOfFunctions.push(function () {
      console.log(`I'm on ${i} position`);
    });
  }

  return arrayOfFunctions;
}

let allFunctions = closureInLoop();
