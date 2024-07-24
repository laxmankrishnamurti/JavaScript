/**
 * Activity - 01
 */

//Task - 01

const promiseOne = new Promise(function (resolve, reject) {
  try {
    // setTimeout(() => {
    //   console.log("Async task-01 has been completed");
    //   resolve();
    // }, 2000);
  } catch (error) {
    reject();
  }
});

// promiseOne
//   .then(() => {
//     console.log("Promise consumed");
//   })
//   .catch((error) => {
//     console.error("Promise rejected with :: ", error);
//   });

//Output : Async task has been completed
//Output : Promise consumed

//Task - 02

const promiseTwo = new Promise(function (resolve, reject) {
  try {
    // setTimeout(() => {
    //   const response = fetch("http://localhost:3000/accounts");
    //   console.log("Async task - 02 has been completed");
    //   resolve();
    // }, 2000);
  } catch (error) {
    reject();
  }
});

// promiseTwo
//   .then(() => {
//     console.log("promiseTwo consumed successfully");
//   })
//   .catch((error) => {
//     console.error("promiseTwo rejected ::", error);
//   });

//Output : promiseTwo rejected
//Output : TypeError: Failed to Fetch

/**
 * Activity - 02
 */

//Task - 03

function getUserData(id) {
  return new Promise(function (resolve, reject) {
    try {
      setTimeout(() => {
        fetch(`http://localhost:3000/users/${id}`)
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            } else {
              console.log("Error while fetching userdata");
            }
          })
          .then((data) => {
            let { username } = data;
            resolve(username);
          });
      }, 1000);
    } catch (error) {
      reject();
    }
  });
}

getUserData(1)
  .then((data) => {
    console.log("username is : ", data);
  })
  .then(() => {
    setTimeout(() => {
      getUserData(2)
        .then((data) => {
          console.log("username is : ", data);
        })
        .catch((error) => {
          console.log("Promise rejected : ", error);
        });
    }, 2000);
  })
  .then(() => {
    setTimeout(() => {
      getUserData(3)
        .then((data) => {
          console.log("username is : ", data);
        })
        .catch((error) => {
          console.log("Promise rejected : ", error);
        });
    }, 3000);
  })
  .then(() => {
    setTimeout(() => {
      getUserData(4)
        .then((data) => {
          console.log("username is : ", data);
        })
        .catch((error) => {
          console.log("Promise rejected : ", error);
        });
    }, 4000);
  })
  .then(() => {
    setTimeout(() => {
      getUserData(5)
        .then((data) => {
          console.log("username is : ", data);
        })
        .catch((error) => {
          console.log("Promise rejected : ", error);
        });
    }, 5000);
  })
  .catch((error) => {
    console.log("Promise rejected : ", error);
  });
