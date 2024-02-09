function setUsername(username){
    this.username = username;
}

function createUser(username, email, password){
    setUsername(username)
    this.email = email;
    this.password = password;
}

const user1 = new createUser('Laxman krishnamurti', 'freelancing.laxman@gmail.com', '6354');
console.log(user1);

//Output : createUser {email: 'freelancing.laxman@gmail.com', password: '6354'}

//Here, we don't get the username. for more details "Read (.md)" file.

function setName(name){
    this.name = name;
}

function customer(name, origin, loan){
    setName.call(this, name);
    this.origin = origin;
    this.loan = loan;
}

const customerOne = new customer('Rahil Shriwastav', 'India', '1,50,000');
console.log(customerOne);

//Output : customer {name: 'Rahil Shriwastav', origin: 'India', loan: '1,50,000'}