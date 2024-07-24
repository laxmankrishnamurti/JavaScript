/**
 * What is Promise?
 * 
 * Promise is an object that represent eventual complition or failure of an asynchronous task and its resulting value. 
 * 
 * It takes a callback to track whether the task is either completed or rejected. There are two phase of Promises
 * (1) Promise Creation
 * (2) Promise Consumption
 */

let userInfo = {
    _id: 'YVRK90KYYPK9816E',
    username: "Laxman Krishnamurti",
    age: 21,
    email: "laxmankrishnamurti@gmail.com",
    status: "Student"
}

const promiseOne = new Promise(function (resolve, reject) {
    try {
        setTimeouddft(() => {
            console.log("Async task has been completed")
            resolve(userInfo)
        }, 1000)
    } catch (error) {
        reject()
    }
})

promiseOne.then((data) => {
    console.log("Promise consumed")
    console.log("Data is : ", data)
})
promiseOne.catch((error) => {
    console.error("Promise Rejected ", error)
})