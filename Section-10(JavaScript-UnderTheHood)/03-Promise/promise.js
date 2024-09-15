// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise fulfilled");
//     }, 2000);
//   });
// }

// const data1 = getData();
// data1
//   .then((res) => {
//     console.log("Data1 status : ", res);
//   })
//   .catch((err) => {
//     console.log("Data1 status : ", err);
//   })
//   .finally(() => {
//     console.log("Promise completed");
//   });

//Output :: Data1 status :  Promise fulfilled

// Let's solve the Pyramid of doom problem

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
