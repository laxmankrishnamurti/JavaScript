//Uses of bind-method.

// 1. With the bind() method, an object can borrow a method from another object.

const user = {
    firstName : 'Laxman',
    lastName : 'Krishnamurti',
    fullName : function(){
        return this.firstName;
    }
}

const user2 = {
    firstName : 'Harshad',
    lastName : 'Mehta'
}

let fullName = user.fullName.bind(user2);
console.log(fullName());

// 2. Preserving "this"

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