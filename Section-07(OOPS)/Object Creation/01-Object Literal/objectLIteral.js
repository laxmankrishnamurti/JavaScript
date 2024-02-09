const mydetails = {
    firstName : 'Laxman',
    lastName : 'Krishnamuti',

    //methods
    greetings : function(){
        return (`Hello world!!! My name is ${this.firstName} ${this.lastName}`);
    },

    //nested object
    contact : {
        personal : '950898',
        landline : '620158',
    }

}

console.log(mydetails); 

//Output : {firstName: 'Laxman', lastName: 'Krishnamuti', contact: {…}, greetings: ƒ}

console.log(mydetails.greetings());

//Output : Hello world!!! My name is Laxman Krishnamuti

console.log(mydetails.contact ?.personal);

//Output : 950898

// Note :: If "personal" dosen't exist in the object then we get "undefined".

console.log(mydetails ?. contact ?. landlined);

//Output : undefined