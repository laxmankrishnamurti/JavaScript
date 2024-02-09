//Outdated Approach. But it is necessary to know that.

const user = {
    name : 'Laxman Krihshnamurti',
    age : 21,
    email : 'freelancing.laxman@gmail.com'
}

const user1 = {
    name : 'Harshad Mehta',
    __proto__ : user
}

console.log(user);
console.log(user1);

console.log(user.email);        //Output : freelancing.laxman@gmail.com
console.log(user1.email);      //Output : freelancing.laxman@gmail.com

user1.email = 'laxmankrishnamurti@gmail.com';

console.log(user.email);        //Output : freelancing.laxman@gmail.com
console.log(user1.email);       //Output : laxmankrishnamurti@gmail.com

const mySelf = {
    name : 'Laxman Krishnamurti',
    age : 21
}

const now = {
    isTeaching : true,
    __proto__ : mySelf
}

const after = {
    philosophy : true,
    __proto__ : now
}

console.log(after.isTeaching);      //Output : true
console.log(mySelf.philosophy);     //Output : undefined

//Because, "mySelf" has not access of "after" object property. So, for accessing the property first of all we have to inherit after property to mySelf.

Object.setPrototypeOf(after, mySelf);
console.log(mySelf.hasOwnProperty('age'));          //Output : true
console.log(mySelf.hasOwnProperty('philosophy'));   //Output : false

// Modern Syntax

const company = {
    name : 'Start-up',
    pay : function(){
        console.log('Paying');
    }
}

const worker = {
    userName : 'Laxman Krishnamurti',
    isWorking : function(){
        console.log('Working');
    }
}

// company.__proto__ = worker;
console.log(company);
/**
 * Here, company inherit worker object. So, that's why company object can use the worker prototype but worker object dosen't use company prototype.
 * 
 * name: 'Start-up', pay: ƒ}
 * 
 * [[Prototype]]: Object
    isWorking: ƒ ()
    userName: "Laxman Krishnamurti"
    [[Prototype]]: Object
 */
console.log(worker);
//Output : {userName: 'Laxman Krishnamurti', isWorking: ƒ}

// worker.__proto__ = company;
// console.log(worker.pay());

/*Output :: Uncaught TypeError: Cyclic __proto__ value
    at set __proto__ (<anonymous>)
*/

//Note :: If we already inherit one object with another object then we can not switch anymore. If we the another object inherit the first one then we have to comment or remove the "__proto__" property.

worker.__proto__ = company;
worker.pay();               //Output : Paying

/******************************************************** Modern Syntax ******************************************************/

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

console.log(personalComputer.name);     //Output : lenovo
personalComputer.check();               //Output : Easy to use

/**
 * Q :: Create a prototype for string which give the actual length of the string by removing it's space.
 */

let userName = 'laxman        ';
console.log(userName.length);           //Output : 14

String.prototype.trueLength = function(){
    return (`True length of the string is : ${this.trim().length}`)
}
console.log(userName.trueLength());     //Output : True length of the string is : 6