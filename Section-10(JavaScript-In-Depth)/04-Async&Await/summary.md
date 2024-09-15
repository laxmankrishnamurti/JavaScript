# KEY TAKEAWAYS

The syntax "async & await" is widely used in JavaScript becasue of it's simplicity. It reduces the redundency code that we have faced previously in promise chaining.

<code>async :: async function always returns a promise.</code>
<code>await :: await pauses the execution of its surroundinig async function until the promise is settled.</code>

We can make a synchronous function to Asynchronous function using the async keyword. Keep in mind we can only use "await" keyword inside the Asynchronous function.

### Let's have a look on Pyramid of doom solution using async and await

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
  console.log("Fetching data for id 1 .......");
  await getData(1);
  console.log("Fetching data for id 2 .......");
  await getData(2);
  console.log("Fetching data for id 3 .......");
  await getData(3);
  console.log("Fetching data for id 4 .......");
  await getData(4);
  console.log("Fetching data for id 5 .......");
  await getData(5);
  console.log("Fetching data for id 6 .......");
  await getData(6);
  console.log("Fetching data for id 7 .......");
  await getData(7);
  console.log("Fetching data for id 8 .......");
  await getData(8);
  console.log("Fetching data for id 9 .......");
  await getData(9);
  console.log("Fetching data for id 10 .......");
  await getData(10);
}

fetchApi();
```
