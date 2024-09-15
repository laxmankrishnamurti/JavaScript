# SETTING TIMER IN ASYNCHRONOUS TASK

## WITH CALLBACK

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

## WITH PROMISES

```js
function fetchApi(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        console.log("Data for id : ", id);
        resolve("Promise resolved");
      } else {
        reject(
          "Promise rejected!!! Please pass an argument which is greater than 10."
        );
      }
    }, 1000);
  });
}

fetchApi(1)
  .then(() => {
    return fetchApi(2);
  })
  .then(() => {
    return fetchApi(3);
  })
  .then(() => {
    return fetchApi(4);
  })
  .then(() => {
    return fetchApi(5);
  })
  .then(() => {
    return fetchApi(6);
  })
  .then(() => {
    return fetchApi(7);
  })
  .then(() => {
    return fetchApi(8);
  })
  .then(() => {
    return fetchApi(9);
  })
  .then(() => {
    return fetchApi(10);
  })
  .catch((err) => {
    console.error("Err : ", err);
  })
  .finally(() => {
    console.log("Promise Consumed");
  });
```

## WITH ASYNC & AWAIT

```js
function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data for args : ", id);
      resolve();
    }, 1000);
  });
}

async function fetchApi() {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
  await getData(5);
  await getData(6);
  await getData(7);
  await getData(8);
  await getData(9);
  await getData(10);
}

fetchApi();
```
