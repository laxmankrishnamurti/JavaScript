function multiplyTwoNumbers(a, b) {
  console.log("Product is : ", a * b);
}

function parentFun(a, b, cb) {
  cb(a, b);
}

parentFun(10, 20, multiplyTwoNumbers); // Output :: Product is 200

//Instead of passing a function reference we can also pass a function definition at the place of callback.

function getData(a, cb) {
  setTimeout(() => {
    console.log("Response for args : ", a);
    // cb();
  }, 2000);
}

// getData(1, getData(10, getData(20)));

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
