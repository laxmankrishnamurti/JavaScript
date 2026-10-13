/**
 *    - Stack Memory
 *          - Stores primitive data types where we get a copy of variable's value
 *    - Heap Memory
 *          - Stores non-primitive data types and it directly gets us the main memory reference of a variable which basically means that whatever the changes we're going to made in that variable will affect everywhere where it is being used. 
 */

let userName = "Rohit Shetty";
let changedUsername = userName;
changedUsername = "Rahul Chauhan";

console.log("username", userName);
console.log("changedUsername", changedUsername);


const user1 = {
      userName : "Rhaushan Yadav",
      userId : "YRE76",
      isFutureAndOptinActivated : false
}
user1.email = "user1@gmail.com";

let user2 = user1;
user2.isFutureAndOptinActivated = true;

console.log("user1", user1);
console.log("user2", user2);