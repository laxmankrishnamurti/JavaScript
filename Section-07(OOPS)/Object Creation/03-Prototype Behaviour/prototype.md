# Prototype Behaviour In JS?

It is very important for understandig about the mechanism of JavaScript. The default behaviour of JavaScript is "Prototype" and we already know that prototype is nothing but the property of the object. And we also know that a Prototype can also be an object so with that it has also a prototype and so on......... that is called Prototype chaning. What does it means? Will the chaning is continue? let me explain.........

As we know the default behaviour of JavaScript is "Prototype" based. It means if JavaScript dosen't find it's required information then it moves forward, like - child to parent, parent to grand-parent, grand-parent to global. But, it can't stop without without finding it's required result or untill it's not get "null".

JavaScript does that because of it's "Prototype". And the chaning ends at that point when a prototype has "null" propeerty of it's own prototype. And because of this process, here comes "new & this" keyword.

So, that's why we can say that "Everything in JavaScript is an Object".

We don't have access of "this" keyword in "Arrow function". Because, in Arrow function "this" keyword lost it's current context and it starts to refer it's "global scope".

# Can we create our own Prototypes?

The answer is : YES! We can do this. Here, we go......

<pre>
    function createUser(name, age, origin){
        this.name = name;
        this.age = age;
        this.origin = origin;
    }

    createUser.prototype.message = function(){
        return (`Hello, this is ${this.name} here!!!`)
    }

    const user1 = new createUser('Laxman Krishnamurti', 21, 'India');
    console.log(user1);
    console.log(user1.message());
</pre>

Here, "new" keyword helps to catch it's prototype.

Note :- If we create new Users using some other "constructor function" and then we are using this "message prototype" then we get an Error. Because, the "message prototype" is not associated with the other "constructor function". 

To be more precise, the "message prototype" is not an universal prototype. For more clearence read below answer.

# Can we create an "Universal Prototype"?

The answer is : YES! We can do this. let's go...........

<pre>
    function createUser(name, age, origin){
        this.name = name;
        this.age = age;
        this.origin = origin;
    }

    function myCustomer(name, place, origin){
        this.name = name;
        this.place = place;
        this.origin = origin;
    }

    //Universal prototype
    Object.prototype.sayHello = function(){
        return (`Hello world!!! My name is ${this.name}`)
    }

    const user1 = new createUser('Laxman Krishnamurti', 21, 'India');
    const customerOner = new myCustomer('Rahul Shriwastav', 'Gujarat', 'India');

    //let's use the "Universal prototype"
    console.log(user1.sayHello());
    console.log(customerOne.sayHello());
</pre>

Note : Universal Prototype means the Prototype is accessable by all other Objects either it is created with object literal, constructor function or class based object.

Disclaimer :: The "sayHello" prototype is only for objects not for array or strings. For these we can create a seperate "Universal Prototype". 

Let's create a "Universal prototype" for Array. 

<pre>
    Array.prototype.hello = function(){
    console.log('Hello world!!! This is an universal prototype for arrays.');
    }
</pre>

Note :: Array, String, Object, Function.....etc do not share it's own "Universal Prototype" with each other.