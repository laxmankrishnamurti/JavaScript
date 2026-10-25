// FOR LOOP

/**
 *    Loop Mechanism
 *          - Declaration
 *          - Conditional Checking
 *          - Iteration Increment/Declaration
 */

for (let index = 0; index < 10; index++) {      
      console.log(`index: ${index}`);
      if(index === 5){
            for(let num = 63; num <= 70; num++){
                  console.log(`Char at ${num}: ${String.fromCharCode(num)}`);
            }
            //return;
      }
}

// console.log(index);     // ReferenceError: index is not defined

for(let index = 95; index <= 105; index++){
      console.log(`ASCII Char at ${String.fromCharCode(index)}`)
}

// break and continue

for(let num = 0; num <= 10; num++){
      if(num === 2){
            continue;         // ignore the controlflow for that particular iteration
      }else if(num === 4){
            break;      // break the controlflow
      }
      console.log(`num ${num}`)
}


// WHILE LOOP

const users = ["Rahul", "Rohit", "Ranjani"];
console.log(`total user: ${users.length}`);
let user = 0;
console.log("WHILE LOOP");
while(user < users.length){
      console.log(`user at ${user} is ${users[user]}`);
      user++;
}


// DO-WHILE LOOP

const userId = ["DKD111", "LSD222", "LKS333"];
let id = 0;
console.log("DO-WHILE LOOP");
do{
      console.log(`user at ${id} is ${userId[id]}`);
      id++;
}while(id < userId.length)