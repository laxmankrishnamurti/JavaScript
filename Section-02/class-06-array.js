//Here is a detail description about how variables, arrays, objects, functions and all these stuffs are stored in a memory?

/**
 * When we declare a variable like this :-
 * 
 *      let age = 10;
 * 
 * Here, let = Data-type, age = Variable name; and 10 is the actual value of the age variable.
 * 
 * Let's deep-dive into it. We are going to disscuss about how computer trates all of these things. 
 * 
 * Here let is a data type that needs to define because of computer can understand how we are actually trying to store in the memory. It is very important. I hope this is clear. Let's go further........
 * 
 * Here the age is just an reference variable that is actually stored in the stack memory. First of all let's learn about what are the type of memeories in a computer?
 * 
 * So, in terms of memory there are lots of memeory/storage type in a computer(in smaller level) but when we speaking into broader picture then it is going to divided into two different parts. These are :-
 * 
 * (1) STACK MEMORY ( Structured order )        (2) HEAP MEMORY ( Unstructured order)
 * 
 * So, the age is going to be stored in STACK MEMORY and the 10 is going to store in the HEAP MEMORY. Hence, the reference variable(age) that is stored into STACK MEMORY is pointing toward the HEAP MEMORY where the actual value is stored. 
 */


/**
 * Arrray :- Arrray is just like a variable which can store multiple values which data type may be same or different. Array is a Non-primitive data type so it is stored in the Heap memory so that's why any other array can get the direct reference point of that reffered array.
 */

const naturalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(naturalNumber.length);              //Output : 9 (array's length)

//access by indexing.
console.log(naturalNumber[2]);              //Output : 3
console.log(naturalNumber[4]);             //Output : 5

//Array's indexing start from 0 in JavaScript.

const userDetails = ['Laxman', 21, 'freelancing.laxman@gmail.com', 'male'];
console.log(userDetails[2]);                    //Output : freelancing.laxman@gmail.com

//Disclaimer :: It's not recommended to store the userDetails in array. For doing this we use Object which we are going to cover later.

//Ideally array is used when we have to store the same data type values.

const studentsMarks = [85, 55, 95, 56, 66, 98, 78];
//Manupulation of arrray's elements
studentsMarks[1] = 78;
console.log(studentsMarks);                 //Output : (7) [85, 78, 95, 56, 66, 98, 78]

//Different way to declare an Array.

const height = new Array(160, 145, 150, 170, 190, 210);          //All values in CentiMeter.
console.log(height[3]);                                     //Output : 170

const populatedCountry = ['India', 'China', 'Russia', 'Iran', 'Pakistan'];
//check is the US is in the list or not?
console.log(populatedCountry.includes('Us'));           //Output :  false
console.log(populatedCountry.includes('India'));        //Output : true

//Add another country from the end
populatedCountry.push('US');
console.log(populatedCountry.includes('US'));           //Output : true
//Remove array's elements from the last
const removedCountry = populatedCountry.pop();
console.log(removedCountry);                           //Output : US
//Add another country from the begining
populatedCountry.unshift('US');
console.log(populatedCountry.includes('US'));           //Output : true
//Remove country form the begining
const shiftedCountry = populatedCountry.shift();
console.log(shiftedCountry);                            //Output : US

//Check index of an element
console.log(populatedCountry.indexOf('China'));         //Output : 1

/**
 * Join() :- It adds all the array's element into a string.
 */

const getString = populatedCountry.join();
console.log(getString);                         //Output : India,China,Russia,Iran,Pakistan
console.log(typeof getString);                  //Output : string

/**
 * Slice() :- It returns a copy of a section of an array. It dosen't change the Original array.
 */

const getSection = populatedCountry.slice(0, 2);
console.log(getSection);                            //Output : (2) ['India', 'China']
console.log(populatedCountry);                  //Output : (5) ['India', 'China', 'Russia', 'Iran', 'Pakistan']

/**
 * Splice() :- It also returns a section of an array but it cahnges the Original array.
 */

const getSection1 = populatedCountry.splice(0, 2);
console.log(getSection);                                    //Output : (2) ['India', 'China']
console.log(populatedCountry);                             //Output : (3) ['Russia', 'Iran', 'Pakistan']

/**
 * Concatination of an Array :- Concatination menas add multiple array in a single array.
 */

const asianCountry = ['India', 'China', 'Pakistan', 'Japan', 'Bhutan'];
const europianCountry = ['UK', 'Rom', 'Ethens'];
const countries = asianCountry.concat(europianCountry);
console.log(countries);             //Output : (8) ['India', 'China', 'Pakistan', 'Japan', 'Bhutan', 'UK', 'Rom', 'Ethens']

//Easiest way to concate two or more than two array is to use Spread Operator. Like this........

const world = [...asianCountry, ...europianCountry];
console.log(world);             //Output : (8) ['India', 'China', 'Pakistan', 'Japan', 'Bhutan', 'UK', 'Rom', 'Ethens']

/**
 * flat() :- It returns a new array with all sub-array elements concatenated into all recursively upto the specific depth.
 */

//get a Linear array form nested array.

const sports = ['Chess', 'Badminton', ['Cricket', 'Tenis'], 'Football', ['TableTenis', 'Bauli-ball', ['Casino', 'Gaulf']]];
console.log(sports);

//Output : (5) ['Chess', 'Badminton', Array(2), 'Football', Array(3)]

const getAllSports = sports.flat(Infinity);                        //any number or we can simply write infinity.
console.log(getAllSports);

//Output : (9) ['Chess', 'Badminton', 'Cricket', 'Tenis', 'Football', 'TableTenis', 'Bauli-ball', 'Casino', 'Gaulf']

//Check whether the variable is array or not?

console.log(Array.isArray(getAllSports));               //Output : true

/**
 * Array.from() or Array.of() :- It is used to make an new array from a specific point.
 * 
 * If JavaScript unable to convert an element into an array then it will simply return an blank array.
 */

let score1 = 95;
let score2 = 91;
let score3 = 89;

const allMarks = Array.of(score1, score2, score3);
console.log(allMarks);                                  //Output : (3) [95, 91, 89]

//Array.from() ::

let myName = "Laxman Krishnamurti";
let myArr = Array.from(myName);
console.log(myArr);

/**
 * Output : ['L', 'a', 'x', 'm', 'a', 'n', ' ', 'K', 'r', 'i', 's', 'h', 'n', 'a', 'm', 'u', 'r', 't', 'i']
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let returnEven = (num) => {
    if (typeof (num) === 'number') {
        if (num % 2 == 0) {
            return num;
        }
    }
    return 0;
}
let even = Array.from(numbers, returnEven);
console.log(even);

//Output : [0, 2, 0, 4, 0, 6, 0, 8, 0, 10]

let numStr = '123456789';
let getNum = Array.from(numStr, Number);
console.log(getNum);

/**
 * Output : [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

console.log(typeof (getNum));        //Output : object
console.log(typeof (getNum[1]));     //Output : number