# Why we use bind method?

1. With the bind() method, an object can borrow a method from another object.

<pre>
    const user = {
        firstName : 'Laxman',
        lastName : 'Krishnamurti',
        fullName : function(){
            return (`${this.firstName} ${this.lastName}`);
        }
    }

    const user2 = {
        firstName : 'Harshad',
        lastName : 'Mehta'
    }

    let fullName = user.fullName.bind(user2);
    console.log(fullName());
</pre>

2. Preserving "this"

Sometimes the bind() method has to be used to prevent losing this.

<pre>
    console.log(user.fullName());

    //we get as expected result. But, one thing which is very important to know and this is :- "When a 
    function is used as a callback, this is lost."
</pre>

<pre>
    let btn = document.querySelector('#submit-btn');

    class React{
        constructor(){
            this.React = 'React',
            this.server = 'https://localhost:3000'

            btn.addEventListener('click', this.handle.bind(this))
        }

        handle(){
            console.log('Button clicked!!!');
            console.log(this);
        }
    }

    const App = new React();
</pre>