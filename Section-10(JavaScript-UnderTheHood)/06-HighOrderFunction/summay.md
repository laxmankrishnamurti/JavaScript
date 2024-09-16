# KEY TAKEAWAYS

Have a look on the function

```js
function highOrderFunction(fun) {
  fun();
  return console.log("Callback function data : ", num1);
}

function addTwoNumbers(num1, num2) {
  console.log("Sum is : ", num1 + num2);
}

highOrderFunction(addTwoNumbers(1, 2));
highOrderFunction((num1, num2) => {
  console.log("Sum is : ", num1 + num2);
});
```

In both scenario the parent function cannot access any argument of it's callback function because of scope issue.

#### Now, see the code

```js
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
```

Now, with the help of Promise the parent function can access the data. By the way this is not a comparison between using data from it's callback. This is about how we can take a different approach about the "Higher order function".

### Let's do it again in a different way

```js
function asyncHandler(fun) {
  return Promise.resolve(fun()).catch((error) => console.log(error));
}

function childFun() {
  return 1;
}

asyncHandler(childFun).then((data) => {
  console.log("data is : ", data);
});
```
