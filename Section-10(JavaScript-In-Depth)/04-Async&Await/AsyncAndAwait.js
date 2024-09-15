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
