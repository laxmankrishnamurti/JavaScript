/**
 * Activity - 01
 */

//Task - 01

const promiseOne = new Promise(function (resolve, reject) {
    try {
        setTimeout(() => {
            console.log("Async task-01 has been completed")
            resolve()
        }, 2000);
    } catch (error) {
        reject()
    }
})

promiseOne
    .then(() => {
        console.log("Promise consumed")
    })
    .catch((error) => {
        console.error("Promise rejected with :: ", error)
    })

//Output : Async task has been completed
//Output : Promise consumed

//Task - 02

const promiseTwo = new Promise(function (resolve, reject) {
    try {
        setTimeout(() => {
            const response = fetch('http://localhost:3000/accounts')
            console.log("Async task - 02 has been completed")
            resolve(response)
        }, 2000);
    } catch (error) {
        reject()
    }
})

promiseTwo
    .then(() => {
        console.log("promiseTwo consumed successfully")
    })
    .catch((error) => {
        console.error("promiseTwo rejected ::", error)
    })

//Output : promiseTwo rejected
//Output : TypeError: Failed to Fetch

/**
 * Activity - 02
 */

//Task - 03