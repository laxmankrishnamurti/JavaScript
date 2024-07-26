/**
 * ACtivity - 01
 */

//Task - 01

class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  greetings() {
    console.log(`Hello ${this.name}`);
  }

  updateAge(payload) {
    this.age = payload;
    console.log(`Updated age is : ${this.age}`);
  }

  static genericGreetingMessage() {
    console.log(`Hello Person class from Person static method`);
  }
}

const personOne = new Person("Laxman Krishnamurti", 21);
personOne.greetings(); //Output : Hello Laxman Krishnamurti

//Task - 02

personOne.updateAge(23); //Output : Updated age is 23

/**
 * Activity - 02
 */

//Task - 03

class Student extends Person {
  static totalStudents = 0;
  constructor(studentName, studentAge) {
    super(studentName);
    this.age = studentAge;
    this.studentId = Date.now();
    Student.totalStudents += 1;
  }

  getStudentId() {
    return this.studentId;
  }

  greetings() {
    console.log(`Hello ${this.studentId}`);
  }
}

const studentOne = new Student("Kawya Krishnamurti", 6);
console.log("Student id is : ", studentOne.getStudentId()); //Output : Student id is :  1722017104794

//Task - 04

studentOne.greetings(); //Output : Hello 1722017104794

/**
 * Activity - 03
 */

//Task - 05

Person.genericGreetingMessage(); //Output : Hello Person class from Person static method

//Task - 06

console.log(`Total number of student instance : ${Student.totalStudents}`); //Total number of student instance : 1

/**
 * Activity - 04
 */

//Task - 07

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //Getter for fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  //Setter for fullName
  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const userOne = new User("Vikram", "Dhanush");
console.log("full name is : ", userOne.fullName); //Output : full name is :  $Vikram Dhanush

//Task - 08

userOne.fullName = "Pallavi Jain";
console.log(`fullName is : ${userOne.fullName}`); //Output : Pallavi Jain

/**
 * Activity - 09
 */

//Task - 09

class Account {
  #balance = 500;
  constructor(accountHolderName, pan, aadhar) {
    this.accountHolderName = accountHolderName;
    this.pan = pan;
    this.aadhar = aadhar;
  }

  deposit(payload) {
    if (payload > 0) {
      this.#balance += payload;
      console.log(`Deposited :${payload}, new Balance : ${this.#balance}`);
    } else {
      console.log("Deposite amount must be Positive");
    }
  }

  withdraw(payload) {
    if (payload > 0 && payload < this.#balance) {
      this.#balance -= payload;
      console.log(`withdrew : ${payload}, new Balance : ${this.#balance}`);
    } else if (payload > this.#balance) {
      console.log("Insufficient funs");
    } else {
      console.log("withdraw amount must be positive");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

//Task - 10

const firstHolder = new Account(
  "Laxman Krishnamurti",
  "KYYPK9816E",
  937527435035
);

console.log("My balalnce : ", firstHolder.getBalance()); //Output : My balalnce :  500

let depositeAmount = 3000;
let withdrawAmount = 3421;

firstHolder.deposit(depositeAmount); //Deposited :3000, new Balance : 3500
firstHolder.withdraw(withdrawAmount); //withdrew : 3421, new Balance : 79
firstHolder.withdraw(withdrawAmount); //Insufficient funs
