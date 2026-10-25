const programmingLanguages = ["JavaScript", "Python", "C++", "Ruby on Rails"];

const userPreferredLanguage = programmingLanguages.forEach((lang) => {
  if (lang === "JavaScript") {
    return lang;
  }
});

console.log("userPreferredLanguage: ", userPreferredLanguage); // Output: undefined (which means forEach doesn't returns any value)

const getUserPreferredLanguage = programmingLanguages.filter((lang) => {
  if (lang === "JavaScript") {
    return lang;
  }
});

console.log("getUserPreferredLanguage: ", getUserPreferredLanguage); // Output: ['JavaScript']     (which means filter return values which satisfies the condition, if no one match the condition then it will return an empty array explicitly.)

const getUserLang = programmingLanguages.filter((lang) => {
  if (lang === "CSS") {
    return lang;
  }
});

console.log("getUserLang", getUserLang);

const nums = [1, 2, 3, 4, 5];
const newNums = nums.map((num) => {
  return num + 1;
});

console.log("newNums", newNums); // Output: newNums [ 2, 3, 4, 5, 6 ]

// METHON CHAINING

const evenNumbers = nums
  .map((num) => {
    return num * 10;
  })
  .filter((num) => {
    if (num % 2 === 0) {
      return num;
    }
  })
  .map((num) => {
    return num + 1;
  });

console.log("evenNumbers", evenNumbers);


const tradingBalance = [12422,24,424,23342,2,45674,77,7];
const initialValue = 0;
const grossTradingBalance = tradingBalance.reduce((acc, curr) => {return acc + curr}, initialValue); // iterable.reduce(callbackFunction, initialValue)
console.log("total tradingBalance: ", grossTradingBalance);       // initialValue can be hard coded. 