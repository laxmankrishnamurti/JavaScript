# What exactly do "Call Method"?

Before going to it's implimentation we have to understand that what's the exact problem that we are facing when before using "call method". Let's understand......

Suppose we have two "Constructor Function" and the second function try to inherit some prototype of first function then how we can do that? Let's understand......

<pre>
    function setUsername(username){
        //Network call or api call or complex DB call

        this.username = username;
    }

    function createUser(username, email, password){
        setUsername(username)
        this.email = email;
        this.password = password;
    }

    const user1 = createUser('Laxman Krishnamurti', 'freelancing.laxman@gmail.com', '6354');
    console.log(user1);
</pre>

<pre>
    {
        Output :: createUser {email: 'freelancing.laxman@gmail.com', password: '6354'}
    }

    Here, we don't have an access of username. But, why? Let's understand.
</pre>

# Why we don't have the access of "username"?

As we know that at the end of the day all function is executed in call-stack. And every function creates it's own execution context which is known as "Functional Execution Context". Every Function has it's own Execution context. So, with that when "setUsername function" came into call-stack due to "createUser" then it starts to create it's own current execution context and when setUsername function executed successfully after that the function is deleted along with their current execution context and once it's context will deleted then "createUser" has came into the picture and when it try to invoke "this.username" from setUsername then it cannot reach at that point because the "current execution context" of the setUsername is deleted.

So, the main problem is that we dosen't save the "current execution context" of the setUsername function. Now, the big question is that we have to save the "current execution context" of the function which we are trying to "inherit".

# How we can save the Current-execution-context of the "Inherit function"?

The answer is simple is that we are going to use "this & call" method.

Here,
- this :: hold Current execution context
- call :: call the value with given prototype. 

<pre>
    function setName(name){
        this.name = name;
    }

    function customer(name, origin, loan){
        setName.call(this, name);
        this.origin = origin;
        this.loan = loan;
    }

    const user1 = new customer('Rahul Shriwastav', 'India', '1,50,500');
    console.log(user1);

    //Now, we get as expected result.
</pre>