//We already covered the theory part of classes earlier. Now, let's go it's Implimentation.

class createUsers{
    constructor(name, age, origin, gender, status){
        this.name = name;
        this.age = age;
        this.origin = origin;
        this.gender = gender;
        this.status = status;
    }

    greetings(){
        console.log('Namaste!!!');
    }
    
    getInfo(){
        console.log(`Hello world!!! My name is ${this.name} and I'm from ${this.origin}.`);
    }

}

const user1 = new createUsers('Laxman Krishnamurti', 21, 'India', 'male', 'Student');
console.log(user1);

//Output : createUsers {name: 'Laxman Krishnamurti', age: 21, origin: 'India', gender: 'male', status: 'Student'}

user1.greetings();          //Output : Namaste!!!
user1.getInfo();            //Output : Hello world!!! My name is Laxman Krishnamurti and I'm from India.

//Note :: Under the hood this works same as "Constructor function".


/********************************************************** Inheritance In Classes ******************************************/

class buyer{
    constructor(customerName){
        this.customerName = customerName;
    }

    info(){
        console.log(`Namaste!!! My name is ${this.customerName}`);
    }
}

class seller extends buyer{
    constructor(customerName, origin, loanAmount){
        super(customerName);
        this.origin = origin;
        this.loanAmount = loanAmount;
    }

    amount(){
        console.log(`Loan amount to the buyer is ${this.loanAmount}`);
    }
    
}

const newSeller = new seller('Rahul Shrivastav', 'India', '2,00,000');
console.log(newSeller);

//Output : seller {customerName: 'Rahul Shrivastav', origin: 'India', loanAmount: '2,00,000'}

console.log(newSeller.customerName);     //Output : Rahul Shrivastav


//We can also the instance of "newSellers". See the below code........

console.log(newSeller instanceof buyer);        //Output : true
console.log(newSeller instanceof seller);       //Output : true

//create a new instace by buyer.

const newBuyer = new buyer('Harshad Mehta');
console.log(newBuyer);              //Output : buyer {customerName: 'Harshad Mehta'}
newBuyer.info();                    //Output : Namaste!!! My name is Harshad Mehta

//Now, check instance of newBuyer with seller class.

console.log(newBuyer instanceof seller);        //Output : false

/********************************************* Static keyword in method ***************************/

class users{
    constructor(name, age, origin, password){
        this.name = name;
        this.age = age;
        this.origin = origin;
        this.password = password;
    }

    static pass(){
        console.log(`My password is : ${this.password}`);
    }

    info(){
        console.log(`My name is ${this.name}`);
    }
}

const user2 = new users('Laxman Krishnamurti', 21, 'India', '6354');
console.log(user2);

//Output : users {name: 'Laxman Krishnamurti', age: 21, origin: 'India', password: '6354'}

user2.info();       //Output : My name is Laxman Krishnamurti
user2.pass();       

//Output : Uncaught TypeError: user2.pass is not a function {because of static keyword};