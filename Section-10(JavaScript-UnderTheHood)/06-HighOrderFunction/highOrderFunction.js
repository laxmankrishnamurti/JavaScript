function highOrderFunction(fun) {
  fun();
  return console.log("Callback function data : ", num1);
}

function addTwoNumbers(num1, num2) {
  console.log("Sum is : ", num1 + num2);
}

// highOrderFunction(addTwoNumbers(1, 2));

// highOrderFunction((num1, num2) => {
//   console.log("Sum is : ", num1 + num2);
// });

function highOrderFun(fun) {
  return Promise.resolve(fun)
    .then((data) => {
      return data();
    })
    .then((data) => {
      console.log("Returned data is : ", data);
    })
    .catch((error) => {
      console.log("error : ", error);
    });
}

highOrderFun(() => {
  return 5;
});

//Let's take a different approach

function asyncHandler(fun) {
  return Promise.resolve(fun()).catch((error) => console.log(error));
}

function childFun() {
  return 1;
}

asyncHandler(childFun).then((data) => {
  console.log("data is : ", data);
});
