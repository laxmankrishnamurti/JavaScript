// FOR OF
// Iterators: string, array, object

const arr1 = [1,2,3,4,5];
for (const num of arr1){
      console.log(`num: ${num}`);
}

const userName = "Uday Pandey";
let position = 0;
for(const name of userName){
      console.log(`char at ${position}: ${name}`);
      position++;
}

// MAP : The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value(both objects and primitive values) may be used as either a key or a value. Map doesn't hold any duplicate key-value pairs. Traditional object doesn't remember the order of their keys. 

const countries = new Map();
console.log(countries); // Map(0){}
countries.set("IN", "India");
countries.set("PAK", "Pakistan");
countries.set("BGL", "Bangladesh");
countries.set("USA", "United States of America");
countries.set("IN", "India");
console.log(`countries object: ${countries}`);  // Output: map object: [object Map]
console.log("countries object", countries);

/**
 *    Output
 *          map object Map(4) {
                  'IN' => 'India',
                  'PAK' => 'Pakistan',
                  'BGL' => 'Bangladesh',
                  'USA' => 'United States of America'
            }
 */

for(const country of countries){
      console.log(`country: ${country}`);
}

/**
 *    Output
 *          country: IN,India
            country: PAK,Pakistan
            country: BGL,Bangladesh
            country: USA,United States of America
 */

for(const country of countries){
      console.log("country", country)
}

/**
 *    Output
 *          country [ 'IN', 'India' ]
            country [ 'PAK', 'Pakistan' ]
            country [ 'BGL', 'Bangladesh' ]
            country [ 'USA', 'United States of America' ]
 */

for(const [countryKey, countryValue] of countries){
      console.log(`key: ${countryKey}; value: ${countryValue}`);
}

// lets try to apply the loop on an object literal

const userDetails = {
      name: "Rahul Choudhary",
      age: 58,
      email: "rahulchoudhary@gmail.com",
      isLoogedIn: true
}

// for(const [userKey, userValue] of userDetails){
//       console.log(`userKey: ${userKey}; userValue: ${userValue}`);      // TypeError: userDetails is not iterable
// }

const extentions = {
      ".html": "HTML",
      ".js": "JavaScript",
      ".cpp": "C++",
      ".py": "Python"
}

for(const extention in extentions){
      console.log(`${extention}`)
}

/**
 *    Outputs     
 *          .html
            .js
            .cpp
            .py
 */

for(const extention in extentions){
      console.log(`extention: ${extention}; value -> ${extentions[extention]}`);
}

console.log(extentions[".html"])

const arr2 = ["js", "html", "css"];
for(const arr in arr2){
      //console.log(`arr: ${arr}`);   // Output: 0,1,2
      console.log(`arrIndex: ${arr}: arrValue: ${arr2[arr]}`);
}

/**
 *    Output
 *          arrIndex: 0: arrValue: js
            arrIndex: 1: arrValue: html
            arrIndex: 2: arrValue: css
 */

const newMap = new Map();

newMap.set("HTML", "Hyper Text Markup Language");
newMap.set("CSS", "Cascading Style Sheet",);
newMap.set("JS", "JavaScript",);

console.log("newMap", newMap);

for(const map in newMap){     // map is not iteratable in this loop
      console.log("map in forIn", map);
}

// FOREACH LOOP

const segments = ["Trading", "Investing", "Intraday", "Long Term Investing", "Short Term Investing", "Future and Options"];
segments.forEach((segment) => {     // arrow function as a callback function
      console.log("segment", segment);
})

segments.forEach(function(segment){       // typical function as a callback function
      console.log("segment", segment.length);
})

function printMe(item){
      console.log("item", item);
}

segments.forEach(printMe);    // do not execute the function just pass its reference

// forEach carries three parameters :- value, index, entireArray

segments.forEach((segmentValue, segmentIndex, entireSegment) => {
      console.log(`segmentValue: ${segmentValue}, segmentIndex: ${segmentIndex}, entireSegment: ${entireSegment}`);
      console.log("\n");
})

const langDetails = [
      {
            lang: "JavaScript",
            useCase: "Web Development, Backend"
      }, 
      {
            lang: "Python",
            useCase: "Data Sceince, Backend"
      }
]

langDetails.forEach((lang) => {
      console.log(lang.useCase)
})