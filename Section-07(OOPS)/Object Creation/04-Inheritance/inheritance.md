# What is Inheritance in JavaScritp?

In programming, inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one. JavaScript implements inheritance by using objects. Each object has an internal link to another object called its prototype.

To be more precise, "Some property or methods of an Object is being used by some Other Object" the behaviour is called Inheritance.

- Every Object is a new instance.
- We link two different-different object that can share it's own property and methods and use them, like this :- 
<pre>
    const company = {
        name : "start-up"
        status : function(){
            console.log('Paying');
        }
    }
    const worker = {
        userName : 'Laxman Krishnamurti',
        check : function(){
            console.log('Working');
        }
    }

    company.__proto__ = worker;

    //Now, company object can able to access all worker's prototype and it's methods. But, worker can not access company's
    prototype and it's methods.

    company.check();
</pre>

Note :: This method is being old. We have modern syntax for doing same task.

# Modern Syntax for Inheritance?

Have a look on this which is given below.

<pre>
    const laptop = {
        name : 'lenovo',
        price : '25,000',
        check : function(){
            console.log('Easy to use');
        }
    }

    const personalComputer = {
            pcName : 'Ryzen-3',
            pcPrice : '35,000',
            advantage : function(){
                console.log('More faster than a Laptop');
            }, 
            disAdvantage : function(){
                console.log('We can not carry it from one place to another place');
            }
    }


    Object.setPrototypeOf(personalComputer, laptop);
    //By applying this method : Now, personalComputer object can use the laptop object prototype and it's methods.

    console.log(personalComputer.name);
    personalComputer.check();
</pre>