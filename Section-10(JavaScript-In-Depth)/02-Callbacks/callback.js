function multiplyTwoNumbers(a, b) {
  console.log("Product is : ", a * b);
}

function parentFun(a, b, cb) {
  cb(a, b);
}

parentFun(10, 20, multiplyTwoNumbers); // Output :: Product is 200

//Instead of passing a function reference we can also pass a function definition at the place of callback.
