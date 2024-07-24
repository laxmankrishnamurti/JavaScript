/**
 * Activity - 01
 */

//Task - 01

const promiseOne = new Promise(function (resolve, reject) {
    try {
        setTimeout(() => {
            console.log("Async task has been completed")
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