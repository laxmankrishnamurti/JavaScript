# What does it means by "Asynchronous" in JavaScript?

Asynchronous means "A task which not dependent upon the JS engine, it execute independentally". Like these type of Task JS engine only cares about it's priority order and it's syntax. But, the execution of the task is not in the hand of JS engine. Because, the task can be a Network call, API call or any Database call, and the task is done by some other entities. So, this is all about "Asynchronous Task in JavaScript".

# Like what type of task makes JavaScript "Asynchronous". 

Here are the few examples that make JavaScript "Asynchronous". These are :- 
- SetTimeOut
- ClearTimeOut
- SetInterval
- ClearInterval
- Promises
- Fetch API 

# What is API?
 
In simple words, API is just a way of Communication between two different-different programming languages.

# API Request via XML?

Different state Details

Value       State
  0         Unsent
  1         Opened
  2         Headers-received
  3         Loading
  4         Done

Note :- This method is too old to use. We have better syntax for doing this type of asynchronous task. Actually, after ES-6 JavaScript is very changed and became more powerful. After ES-6, we have Promises, fetch api....etc.

# What is Promise?

A Promise is an Object and it represents the eventual completion (or failure) of an asynchronous operation and its resulting value. To be more Precise, Promises are used to track whether the Asynchronous task is completed or not? If the task will completed successfully then promise has a method called "resolve", we fired it and after failure we call "reject" method.

There are two parts of a Promise, these arre:-
(1) Creation
(2) Comsumption

Here are the syntax of Promises.

<pre>

  <!-- Creation-Phase -->

  const myPromise = new Promise((resolve, reject) => {
    if(true){
      //Do some task
      resolve()   //after completion we call resolve for consuming the promise.
    }else {
      reject()    //If Asynch task failed to execute.
    }
  })

  <!-- Consumption-Phase -->

  myPromise
  .then((data) => {
    //Do some task or return any value for next "then"
  })
  .catch((err) => {
    //If Promise will rejecte then reject method will fire and give an error and the error catched by the ".catch" method.
  })
</pre>

  Note:- Resolve() and Reject() can return data and we don't need to hold the promise into a variable. We can simply define the promise without storing into a varibale.

  