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

/*

//Un-optimized code 

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

  */

//Optimized Code

async function getUserData(id) {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    if (response.status === 200) {
      const userData = await response.json();
      return userData.username;
    } else {
      console.log("Response was not ok");
      return null;
    }
  } catch (error) {
    console.log("Error while fetching userdata :: ", error);
  }
}

async function fetchUserNames() {
  for (let i = 1; i <= 5; i++) {
    try {
      let username = await getUserData(i);
      console.log(`Id : ${i} :: Username : ${username}`);
    } catch (error) {
      console.log(`Promise rejected for id : ${id}`);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

// fetchUserNames();

/**
 * Activity - 03
 */

//Task - 04

async function getPromise(promise) {
  try {
    const promiseResolvedValue = await promise;
    console.log("promiseResolvedValue : ", promiseResolvedValue);
  } catch (error) {
    console.error("Promise rejected :: ", error);
  }
}

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is resolved value");
  }, 2000);
});

// getPromise(promiseThree);

//Task - 05

async function getPromise(promise) {
  try {
    let promiseRejectedValue = await promise;
    console.log("promiseRejctedValue : ", promiseRejectedValue);
  } catch (error) {
    console.log("Promise rejected : ", error);
  }
}

const promiseFour = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("promise resolve : true");
    }, 2000);
  } catch (error) {
    reject("promise resolve : false");
  }
});

// getPromise(promiseFour);

/**
 * Activity - 04
 */

//Task - 06

const promiseFive = new Promise(async (resolve, reject) => {
  try {
    let response = await fetch("http://localhost:3000/users/4");
    if (response.status === 200) {
      let userdata = await response.json();
      resolve(userdata);
    }
  } catch (error) {
    reject("Promise rejected");
  }
});

// promiseFive
//   .then((data) => {
//     console.log("fetched data :", data);
//   })
//   .catch((error) => {
//     // console.error("Promise rejected  : ", error);
//     throw error;
//   });

//Task - 07

async function getUserData() {
  try {
    let response = await fetch("http://localhost:3000/users");
    if (response.status === 200) {
      let allUserData = await response.json();
      console.log("All userdata : ", allUserData);
    }
  } catch (error) {
    throw error;
  }
}

// getUserData();

/**
 * Activity - 05
 */

//Task - 08

const waitPromiseOne = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("waitPromiseOne resolved");
    }, 1000);
  } catch (error) {
    reject("waitPromiseOne rejected");
  }
});

const waitPromiseTwo = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("waitPromiseTwo resolved");
    }, 2000);
  } catch (error) {
    reject("waitPromiseTwo rejected");
  }
});

const waitPromiseThree = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("waitPromiseThree resolved");
    }, 3000);
  } catch (error) {
    reject("waitPromiseThree rejected");
  }
});

async function logAllPromises(promises) {
  try {
    let resolvedValue = await Promise.all(promises);
    console.log("all Resolved value : ", resolvedValue);
  } catch (error) {
    console.log("all Rejected value : ", error);
  }
}

// logAllPromises([waitPromiseOne, waitPromiseTwo, waitPromiseThree]);

//Task - 09

const waitPromiseFour = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("waitPromiseFour resolved");
    }, 4000);
  } catch (error) {
    reject("waitPromiseFour rejected");
  }
});

const waitPromiseFive = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("waitPromiseFive resolved");
    }, 3000);
  } catch (error) {
    reject("waitPromiseFive rejected");
  }
});

const waitPromiseSix = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("waitPromiseSix resolved");
    }, 6000);
  } catch (error) {
    reject("waitPromiseSix rejected");
  }
});

async function logAllPromises(promises) {
  try {
    let resolvedValue = await Promise.race(promises);
    console.log("all Resolved value : ", resolvedValue);
  } catch (error) {
    console.log("all Rejected value : ", error);
  }
}

logAllPromises([waitPromiseFour, waitPromiseFive, waitPromiseSix]);
