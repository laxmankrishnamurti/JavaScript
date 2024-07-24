/**
 * Activity - 01
 */

//Task - 01

function changeConstantValue() {
  const username = "Laxman krishnamurti";
  try {
    setTimeout(() => {
      username = "Harshad Mehta";
    }, 2000);
  } catch (error) {
    console.log("Error while changing username : ", error);
  }
}

// changeConstantValue();  //Output : TypeError: Assignment to constant variable

//Task - 02

function divideTwoNumbers(nuumerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error();
    }
    let result = nuumerator / denominator;
    return result;
  } catch (error) {
    throw new Error("Denominator should not be Zero");
  }
}

// let getNumber = divideTwoNumbers(20, 2);
// let getNumber = divideTwoNumbers(20, 0);
// console.log(getNumber);

/**
 * Activity - 02
 */

//Task - 03

function observer() {
  try {
    setTimeout(() => {
      console.log("Try Block - Success");
    }, 2000);
  } catch (error) {
    console.error("Catch block - Execution failed : ", error);
  } finally {
    setTimeout(() => {
      console.log("Finally Block - End");
    }, 3000);
  }
}

// observer();  //Finally runs imidietly either execution failed or success

/**
 * Activity - 03
 */

//Task - 04

class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "CustomError";
    this.status = statusCode;
    this.date = new Date();
  }
}

function throwError(msg, statusCode) {
  throw new CustomError(msg, statusCode);
}

function handleErrors() {
  try {
    throwError();
  } catch (error) {
    if (error instanceof CustomError) {
      console.log(
        `Caught a custom error : ${error.message} with statusCode : ${error.status} which className is : ${error.name}`
      );
    } else {
      console.log(`Caught an unexpected error : ${error.message}`);
    }
  }
}

// handleErrors();

async function getUsers() {
  try {
    await fetch("http://localhost:3000/userssdf")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throwError("API end point is invalid/not working", 404);
        }
      })
      .then((data) => {
        console.log("fetched data : ", data);
      });
  } catch (error) {
    console.log(
      `Failed to fetch users data :: error-message :: ${error.message} :: statusCode :: ${error.status} :: timestamp :: ${error.date}`
    );
  }
}

// getUsers();

//Task - 05

const inputBox = document.getElementById("inputFive");
const submitBtnFive = document.getElementById("submitBtnFive");

submitBtnFive.addEventListener("click", () => {
  try {
    let inputValue = inputBox.value;
    if (inputValue === "") {
      throwError("Email or Username is required to login", 404);
    } else {
      window.alert(`Input value is : ${inputValue}`);
    }
  } catch (error) {
    console.error(
      `Error message :: ${error.message} :: statusCode :: ${error.status} :: time :: ${error.date}`
    );
  }
});

/**
 * Activity - 04
 */

//Task - 06

/*
const promiseOne = new Promise(function (resolve, reject) {
  try {
    let randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber) {
      resolve("Promise consumed");
    } else {
      reject();
      throwError("Internal server error", 500);
    }
  } catch (error) {
    console.error(
      `Error message :: ${error.message} :: statusCode :: ${error.status} :: time :: ${error.date}`
    );
  }
});

promiseOne
  .then(() => {
    console.log("Promise was resolved");
  })
  .catch(() => {
    console.log("Promise was rejects");
  })
  .finally(() => {
    console.log("Promise end here ");
  });
*/
//Task - 07

function randomPromise() {
  return new Promise((resolve, reject) => {
    let randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber) {
      resolve("Random Promise :: Promise resolved");
    } else {
      throwError("Promise rejected", 404);
      reject();
    }
  });
}

async function handleRandomPromise() {
  try {
    const result = await randomPromise();
    console.log(result);
  } catch (error) {
    console.error(
      `Random Promise :: Error message :: ${error.message} :: statusCode :: ${error.status} :: time :: ${error.date}`
    );
  }
}

handleRandomPromise();

/**
 * Activity - 05
 */

//Task - 08

function handleApiEndPoint() {
  fetch("http://localhost:3000/users/asdf")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throwError("Invalid API End-Point", 404);
      }
    })
    .then((data) => {
      console.log("Data is : ", data);
    })
    .catch((error) => {
      console.error(
        `Error message :: ${error.message} :: statusCode :: ${error.status} :: time :: ${error.date}`
      );
    });
}

// handleApiEndPoint();

//Task - 09

async function handleApiEndPoints() {
  try {
    await fetch("http://localhost:3000/users/admin").then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throwError("Rate limit is triggered", 402);
      }
    });
  } catch (error) {
    console.error(
      `Error message :: ${error.message} :: statusCode :: ${error.status} :: time :: ${error.date}`
    );
  }
}

handleApiEndPoints();
