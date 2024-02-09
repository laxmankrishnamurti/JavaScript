# Importance of "NEW" keyword?

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

# Importance of "THIS" keyword?

“This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, “this” references the global object.

But, we get two different-different value of the "global this", like :- 

<pre>
    In Node.JS ::We get an Empty Object :: {}

    In Browser :: We get an Window object :: Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
</pre>

Because, Node.JS, Deno...etc, is just a Run-time enviroment. They don't provide "DOM API" so that's why the "global this" only return an "Empty object". But, Browser provide us the feacture so that's why we get an "window object".

Note :: But, In Arrow function the "this" keyword works differently. So, with that we have to understand about the Arrow function and it's limitation in the arrow function.

<pre>
    The this keyword refers to different objects depending on how it is used:
    
    - In an object method, this refers to the object.
    - Alone, this refers to the global object.
    - In a function, this refers to the global object.
    - In a function, in strict mode, this is undefined.
    - In an event, this refers to the element that received the event.
    - Methods like call(), apply(), and bind() can refer this to any object.

</pre>

# why we use "Arrow function"?

Arrow function {()=>} is concise way of writing JavaScript functions in shorter way. Arrow functions were introduced in the ES6 version. They make our code more structured and readable.

Arrow functions are anonymous functions i.e. functions without a name but they are often assigned to any variable. They are also called Lambda Functions.

<pre>
    const userInfo = () => {
        return (`Hello world!!! My name is 'Laxman Krishnamurti'`);
    }
</pre>

# Advantage of "Arrow function"?

- Arrow function reduce the size of the code.
- The return statement and function brackets are optional for single-line functions.
- It increases the readability of the code.
- Arrow function provide lexical this binding. It means, they inherit the value of "this" form the
  enclosing scope. The feature can be advantageous when dealing with event listeners or callback function where the value of "this" can be uncertain.

# Limitation of "Arrow function"?

- Arrow function do not have the prototype property.
- Arrow function cannot be used with the "new" keyword.
- Arrow function cannot be used as constructors.
- These functions are anonymous and it is hard to debug the code.

# Can we use "this" in Arrow function?

Yes, but in this case "this" keyword is always refers to the parent. Let me explain......

A regular function will always define its "this" value. The "this" keyword is handled differently by arrow functions. Since it lacks a context of its own, they are unable to define its own. Anytime you call "this", they take the value of "this" from the parent scope.

"this" always refers to the context of the function being called in a regular function. The caller of the function is unrelated to "this" in the arrow function, though. It refers to the scope (the enclosing context) in which the function is present. Because of "this", whenever we attempt to access the value of a property of an object from an arrow function method, we receive the value as "undefined". This is because "this" will be referring to the global variable.

This is enough for now. But, for it's implimentation we'll cover it later.