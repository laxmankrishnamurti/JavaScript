# What is OOP/OOPS?

OOPS stand for "Object Oriented Programming". Object-oriented programming is a programming paradigm based on the concept of objects, which can contain data and code: data in the form of fields, and code in the form of procedures. In OOP, computer programs are designed by making them out of objects that interact with one another. To understand OOPS we have to understand about it's components, like :- Object, class, Method....etc

If we see the concepts as we studied in earlier sections like- array, string, object, function..etc. These all are Objects. So, in my point of view we have to see that "JavaScript" is totally based on Classes. Because, every single concept that we studied back has their own "Inherit Properties and mehtods". Now, I conclude by saying that Everything in "JavaScript" is an Object and with that they have their own properties and mehtods which is called "Prototypal Inheritance".

Now, the question is that does JavaScript really have Classes? Because here we are saying that everything in JavaScript is totally based on Objects so where the classes comes from? Let's have a look on the second question & it's answer which is given below...

# Do JavaScript really have Classes?

Both Yes & No :) ! Let me explain....

The word "Classes" in JavaScript comes when EcmaScript 2015 specification(popularly knwon as ES6) came out into the picture, but before that classes don't exist in JavaScript. We have to understand that JavaScript is Primarily a "Prototype based language" and it's classes are primarily a Syntactical Sugar over existing "Prototype based inheritance mechanisma". 

In other words, it provides a more familiar syntax for the developer who is coming from class based language such as "Java or C++". In short, JavaScript Classes are templates for JavaScript Objects.

# Why we use OOP/OOPS?

we use OOPS. Because of 
- enhance the code reusability and save development time
- Easy message passing establishes communication between classes and objects.
- Using functionalities like data abstraction and hiding.
- OOPs ensure the security of the code.

# Do every Programming language have OOPS Concept?

The OOPS concept are always same for every programming language but their implementation differs as per the language. Below is the list of few programming language which have the OOPS Concept.
- Python
- Java
- C++
- JavaScript
- TypeScript
- C#
- Ruby
- PHP
- Kotlin
- R

# What are the main feature or mechanisms which make JavaScript Object-Oriented?

The features or mechanisms are follows :- 
- Object :: An Object is a unique entity that contains properties and methods. For example “a car” is a real-life Object, which has some characteristics like color, type, model, and horsepower and performs certain actions like driving. The characteristics of an Object are called Properties in Object-Oriented Programming and the actions are called methods. An Object is an instance of a class. Objects are everywhere in JavaScript, almost every element is an Object whether it is a function, array, or string. 

    Note: A Method in javascript is a property of an object whose value is a function. 

    The object can be created in two ways in JavaScript:
  - Object Literal :: 
  <pre>
    let user = {
        firstName : 'Laxman',
        lastName : 'Krishnamurti',
        
        //method
        fullDetail : function(){
            return(`The name of the user is ${user.firstName} ${user.lastName}`)
        },
        //object within object
        phoneNumber : [
            personal : '95089',
            landline : '62015'
        ]
    }

        console.log(user.fullDetail());
        console.log(`Personal number is : ${user.phoneNumber.personal}`);
  </pre>
  - Object Constructor ::
  <pre>
    function createUsers(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

        let user1 = new createUsers('Laxman', 'Krishnamurti');
        let user2 = new createUsers('Vikram', 'Dhanush');

        console.log(`First user is : ${user1.firstName} ${user1.lastName}`);
  </pre>

  Note: The JavaScript Object.create() Method creates a new object, using an existing object as the prototype of the newly created object.

  <pre>
    let userInfo = {
        isStudying : false,
        userDetails : function(){
            console.log(`Hello world! My name is ${this.name}. Am I studying : ${this.isStudying}`)
        }
    }
    //Create a new Object using the "userInfo Prototype" by "Object.create(Prototye_Name)"
    const user1 = Object.create(userInfo);

        //Assigning values to the protopye keys.
        user1.name = 'Laxman Krishnamurti';

        //Inherited Property can be overwritten
            user1.isStudying = true; 

        //finally we are ready to use the newly created object.
        user1.userDetails();
  </pre>
  
- Classes :: Classes are blueprints of an Object. A class can have many Objects because the class is a template while Objects are instances of the class or the concrete implementation. 

    But, before going into it's Implementation I inform you again that we should know unlike other Object Oriented languages there are "no classes" in JavaScript we have only Object. To be more precise, JavaScript is a prototype-based Object Oriented Language, which means it doesn’t have classes, rather it defines behaviors using a constructor function and then reuses it using the prototype. 

Note: Even the classes provided by ECMA2015 are objects.

<pre>
    class createUsers {
        constructor(name, profession, class, city){
            this.name = name;
            this.class= class;
            this.city = city;
            this.profession = profession;
        }
        userIntro() {
            return(`Hello world!!! My name is ${this.name} and I'm a ${this.profession}`)
        }

    }

    const user1 =  new createUsers('Laxman Krishnamurti', 'Student', 'BCA(Drop-out from 1st year)', 'Patna');
    console.log(user1.userIntro());
</pre>

"new & this" both are very important keyword while we doing OOP. We'll learn more about these tags further. But, for now this is all about "Class" which is basically working like a "Constructor Function" under the hood.

- Prototype :: JavaScript is a prototype based language, so, whenever we create a function using JavaScript, JavaScript engine adds a prototype property inside a function, Prototype property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties. 

As we seen that there are multiple ways to create an object but for understanding about "Prototype" we are going to create an object using "Constructor function"

<pre>
    function createUser(name, country, state, job){
        this.name = name;
        this.country = country;
        this.state = state;
        this.job = job;
        this.introduction = function(){
            console.log(`Hello world!!! My name is ${this.name}`);
        }
    }

    //we can check user's prototype properties by this :-
    console.log(createUser.prototype);

    //Using this Constructor function we can create multiple new instace of users like this :-
    const user1 = createUser('Laxman Krishnamurti', 'India', 'Bihar', 'Software Developer');

    //calling the prototype method which is written in the "Constructor Function".
    user1.introduction();
    ......................................................................................... "N" numbers of users.

</pre> 

To be more precise, Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has "null" for its own prototype.

Again, prototype is just a property that every function in JavaScript has and, as we saw above, it allows us to share methods across all instances of a function.

- Inheritance  :: It is a concept in which some properties and methods of an Object are being used by another Object. Unlike most of the OOP languages where classes inherit classes, JavaScript Objects inherit Objects i.e. certain features (property and methods) of one object can be reused by other Objects. 

- Polymorphism :: Polymorphism is one of the core concepts of object-oriented programming languages where poly means many and morphism means transforming one form into another. Polymorphism means the same function with different signatures is called many times. In real life, for example, a boy at the same time may be a student, a class monitor, etc. So a boy can perform different operations at the same time. This is called polymorphism. 

For Implementation of "Inheritance" and "Polymorphism" we'll see on Practice file. But, for now this is sufficient for understandiing about both of these concepts.

- Abstraction :: Abstraction means "displaying only essential information and hiding the details". Data abstraction refers to providing only essential information about the data to the outside world, hiding the background details or implementation. 

- Encapsulation :: The process of wrapping properties and functions within a single unit is known as "encapsulation". 

Let's understand about Encapsilaton...

<pre>
    class createUser{
        constructor(name, profession){
            this.name = name;
            this.profession = profession;
        }
        getAddress(city){
            return (`Address is : ${this.city}`)
        }

        getIntro(){
            return (`Hello world!!! My name is ${this.name} and I'm from ${this.city}`)
        }
    }

    let user1 = createUser('Laxman Krishnamurti', 'Student');
    console.log(user1.getAddress('Patna'));
    console.log(user1.getIntro());
</pre>

Here, We are not bothered by the implementation details. We are working with an Object’s interface without considering the implementation details, this is what is called "Encapsulation".