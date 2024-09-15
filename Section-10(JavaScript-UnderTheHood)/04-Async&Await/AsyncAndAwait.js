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
