export function getSumOfAnArray(arr = []) {
  const sum = arr.reduce((sum, nextNum) => {
    return sum + nextNum;
  }, 0);
  return sum;
}

export function sortArray(arr = []) {
  const payload = arr;
  payload.sort((a, b) => {
    return a - b;
  });
  return payload;
}

export function sortArrayOfObjectByPrice(arr) {
  const sortedArray = arr;
  console.log(sortedArray);
  sortedArray.sort((a, b) => {
    return a.price - b.price;
  });
  return sortedArray;
}
