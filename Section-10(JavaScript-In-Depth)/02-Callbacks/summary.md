# KEY TAKEAWAYS

By definition, callbacks are like we are passing an function as an argument to another function.

```js
function multiplyTwoNumbers(a, b) {
  console.log("Product is : ", a * b);
}

function parentFun(a, b, cb) {
  cb(a, b);
}
parentFun(10, 20, multiplyTwoNumbers); // Output :: Product is 200
```

## Let's have a look on Call Stack.

Keep in mind that only the function will enter into the call-stack which is called, rest of the functions will not enter into the call-stack.

1st Step = Global Execution Context (anonymous function)
2nd Step = parentFun (with a = 10, b = 20, cb -> f multiplyTwoNumbers(a,b))
3rd Step = multiplyTwoNumbers (with a = 10, b = 20)

And also keep in mind which function enters first will unwind last. (First come last go)

## What's wrong with callbacks?

Callbacks are good for Synchronous task but it is not good for Asynchronous Task. Here it will become burden to manage and starts creating problems like :- Nested Callbacks which is well-known as "Callback Hell or Pyramid of dom".

#### Interesting Concept :: Let's play with callbacks

```js
function getData(a, cb) {
  setTimeout(() => {
    console.log("Response for args : ", a);
    // cb();
  }, 2000);
}

getData(1, getData(10, getData(20))); // Output : 20,10,1 (Will all be printed on console after 2 second)
```

## Pyramid of DOM OR Callback Hell.

```js
function fetchApi(args, cb) {
  setTimeout(() => {
    console.log("API response for args : ", args);
    cb();
  }, 1000);
}

fetchApi(1, () => {
  fetchApi(2, () => {
    fetchApi(3, () => {
      fetchApi(4, () => {
        fetchApi(5, () => {
          fetchApi(6, () => {
            fetchApi(7, () => {
              fetchApi(8, () => {
                fetchApi(9, () => {
                  fetchApi(10, () => {});
                });
              });
            });
          });
        });
      });
    });
  });
});
```

Async Task means, it is going to take some times and we know that JavaScript is a Synchronous Programming language so that's why the JavaScript Engine dosen't provide any feature to accompolish a task which take some times. Browser API provides a way to perform Async Task.

<code>Note :: In the Callback hell we are actually calling the same function with modified arguments.</code>
