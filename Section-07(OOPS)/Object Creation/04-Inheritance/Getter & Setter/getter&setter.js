const user = {
    name : 'Laxman Krishnamurti',
    age : 21,
    email : '',

    get info(){
        return this.name;
    },
    
    set email(eml){
        this._email = eml;
    }
}
console.log(user.info);     //Output : Laxman Krishnamurti
user.email = 'freelancing.laxman@gmail.com';
console.log(user._email);   //Output : freelancing.laxman@gmail.com

//If we use {this.email} then maximum call stack is going to be full.

/**
 * Note :: It is used store and assign a new value while getting the value.
 *          We can override the values.
*/

const users = {
    firstName : 'Harshad',
    lastName : 'Mehta',

    get fullName(){
        return this.firstName + " " + this.lastName;
    },

    set fullName(name){
        if(name.length < 4){
            alert('Small name is not allowed!!!');
        }else{
            this.firstName = name.split(" ")[0];
            this.lastName = name.split(" ").splice(1).join(" ")
        }
    }
}

console.log(users.fullName);        //Output : Harshad Mehta
users.fullName = 'Laxman Krishnamurti';
console.log(users.fullName);        //Output : Laxman Krishnamurti
users.fullName = 'Shri krishna Radha';
console.log(users.fullName);        //Output : Shri Krishna, for solving this problem we can apply conditions in setter.

console.log(users.fullName);        //Shri Krishna Radha