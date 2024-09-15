# KEY TAKEAWAYS

By definition "Promise" is an eventual(either fulfilled or get rejected) complition on an asynchronous task. Let's deep dive into it.

Asynchronous ===> A task that is going to take some times to complete.
Promise ===> Just for understanding, it is like a contract. if we want something to the promise it gives us assurance that yes, i'm going to give you what you want but i will take some time. And then after some time it will return either the data that we demanded or the contract will get rejected.

So, a promise could be in one of these state ::

- Pending
- Fulfilled
- Rejected

In promise, the fulfilled state is called "resolve" and the Rejected state is called "reject".

```js
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise fulfilled");
    }, 2000);
  });
}

const data1 = getData();
data1
  .then((res) => {
    console.log("Data1 status : ", res);
  })
  .catch((err) => {
    console.log("Data1 status : ", err);
  })
  .finally(() => {
    console.log("Promise completed");
  });

//Output :: Data1 status :  Promise fulfilled
```

Let's understand what is happening here.....

1. When the function "getData" is called, it immediately returns a Contract(In the form of Promise) and we don't know when the promise will complete (if real world scenario). We just make sure that whenever the Contract will fulfilled i must have to extract those data that the Contract returned.

2. Whenever the contract will fulfilled then the "then" and "catch" method will run immediately.
3. "then", "catch", and "fulfilled" those are a method of that promise object.
4. When we call it, it loads into call-stack(only when the contract either get fulfilled or rejected).
5. The last step that is "finally" method, will always run whenever the contract get fulfilled or rejected.

<code>In Pending state none of these methods will run.<code>

## Let's solve the Pyramid of DOOM problem.

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

### Let's have a look on Call Stack.

2. (fetchApi) ===> returns a promise, so it will unwind and then execution starts from then method.
1. (anonymous)

Continue............
