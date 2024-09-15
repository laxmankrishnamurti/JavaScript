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
