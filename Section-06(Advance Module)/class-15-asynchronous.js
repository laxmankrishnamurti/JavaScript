/**
 * JavaScript is a ::
 *                   Synchronous Programming Language
 *                   single thredead : means execution of code starts line-by-line
 * 
 * But, we can perform Asynchronous task into JavaScript using Browser or third party api.
 * 
 * Blocking code :: code that block flow of program (Synchronous task) 
 * Non-blocking code :: code that dosen't block flow of program and execute independentlly called Asynchronous task.
 * 
 * There are three main pillers to understand Asynchronous Task.
 * (1) JS Engine
 * (2) Web API / Enviroment (like:- node.js, deno....etc)
 * (3) Micro task queue / High Priority queue
 * 
 * Asynchronous task is executed in micro task queue, and because of that it execute fastly.
 * 
 * DOM is an API which is provided by the Browser but Node.js dosen't provide DOM API so that's why when we print "this-keyword" globally then we get a "window-object" in the Browser and an "Empty object" in Node.js.
 * 
 */

/**
 * Handler :: A function which is annonymous means that dosen't have any name.
 */