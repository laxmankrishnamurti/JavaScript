function createUsers(name, origin){
    this.name = name;
    this.origin = origin;

    this.info = function(){
        return (`Hello world!!! My name is ${this.name} and I'm from ${this.origin}`)
    }

}

let user1 = new createUsers('Laxman Krishnamurti', 'India');
console.log(user1);

//Output :: createUsers {name: 'Laxman Krishnamurti', origin: 'India', info: ƒ}

console.log(user1.info());

//Output :: Hello world!!! My name is Laxman Krishnamurti and I'm from India

