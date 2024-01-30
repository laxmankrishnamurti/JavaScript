/**
 * What are Promises?
 * 
 * ans :- Promise is an Object. The Promise object represents the eventual completion (or failure) of an asynchronous operation and it's resulting value. 
 * 
 * A Promise is in one of these states ::
 *      pending :: Initial state, neither fulfilled nor rejected
 *      fulfilled :: meaning that the operation was completed successfully
 *      rejected :: meaning that the operation failed.
 * 
 * Promise has two phase :- (1) Creation Phase      (2) Consumption Phase
 * 
 * Promise takes a callback function.
 * Promise reduce callback hell.
 */

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        document.body.style.backgroundColor = 'orange';
        console.log('Asynch Task is complete');
        resolve();      //connecting to "then"
    }, 1000);
})
promiseOne.then(() => {
    console.log('promiseOne is consumed')
})

const promiseTwo = new Promise((resolve, reject) => {
    let logIn = false;
    if(logIn){
        alert('For downloading the file please logIn');
        resolve({username:'laxmankrishnamurti', email:'freelancing.laxman@gmail.com'})
    }else{
        reject('ERR : UncaughtSyntax Error');
    }
})

promiseTwo.then((userData) => {
    console.log(userData);
    console.log('Promise Consumed');
    return userData;
})
.then((user) => {
    console.log(user.username);
    return user;
})
.then((remain) => {
    console.log(remain.email);
})
.catch(() => {
    console.log('Promise Rejected')
})