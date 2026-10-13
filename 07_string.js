const userName = "Komal Singh";     // primitive string

function greetins(username){
      if(username){
            return `Hello ${userName}!`
      }
}

let greetingMsg = greetins(userName);
console.log(greetingMsg);

const userId = new String("URYE873");

console.log(`typeof ${userId}: ${typeof(userId)}`);   // object string
console.log(userId.__ptoro__);      // undefined because we're in terminal right now but this will change when we run the same code in broweser console.
console.log(userId[0]);
console.log(userId.toLowerCase());
console.log(userId.strike()); // Deprecated