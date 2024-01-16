/**
 * Iterations :- Iteration simply means repetation. Genrally in programming language there are three traditional way for iteration. But, in JavaScript there are multiple ways for Iterations. Iteration is also known as loop.
 * 
 * Iterables :- On which we can run a loop called iterables. { Ex :- String, Array, Object}
 * 
 * Traditional loop:-
 * (1). for loop
 * (2). while loop
 * (3). do-while loop
 * 
 * There are three key-points that is very important to know.
 * (1). Declaration / Initialization
 * (2). Condition
 * (3). Repetation
 */

//Print 1 to 10 using all traditional methods

// for(let i = 1; i <= 10; i++){
//     //console.log(i)
// }

//let i = 1;
// while(i <= 10){
//     //console.log(i);
//     i++;
// }

// let count = 1;
// do{
//     console.log(count);
//     count++;
// }while(count <= 10)

for(let table = 1; table <= 10; table++){
    if(table == 5){
        //console.log('Detected Target number');
        break;
    }
    //console.log(table);
}

//After printing 4 there will be no any number is going to be printed because after break statement loop is terminated.

for(let table = 1; table <= 10; table++){
    if(table == 5){
        //console.log('Detected Target number');
        continue;
    }
    //console.log(table);
}

//Except 5 all the remaining number will be printed because continue statement not terminate the loop but skip the number.

//In JavaScript loop is mostly used on Array and Object so that's why there are multiple ways for it's iteration.
//Ex :- for of loop, for in loop, forEach, filter, map....etc

const freedomFighters = ['Bhagat singh', 'ChandraShekhar Aazad', 'Bisimilla', 'Asfakh'];
for(let freedomFighter of freedomFighters){
    console.log(freedomFighter);
}

//All name will be displayed in console
//let's try to iterate a string.

let fighters = freedomFighters[0];
console.log(fighters);                   //Output : Bhagat singh
for(let name of fighters){
    //console.log(name);
}

//Output : B h a g a t  s i n g h

//can it iterates an object? let see......

const userInfo = {
    name : 'Laxman',
    age : 21,
    email : 'freelancing.laxman@gmail.com'
}
// for(let value of userInfo){
//     console.log(value);
// }

//Output :- We got an Uncaught TypeError : userInfo is not Iterable
//so the for of loop is not working on object

/**
 * Map :- Map is also like an array but in this array there is no any single element can occurs multiple times. In this array there is only unique value present. 
 * 
 * Objects do not remember the insertion order of key-value pairs but Map can.
 */

const countries = new Map();
countries.set('IN', 'India');
countries.set('USA', 'United states of America');
countries.set('PAK', 'Pakistan');
console.log(countries);

//Output : Map(3) {'IN' => 'India', 'USA' => 'United states of America', 'PAK' => 'Pakistan'}

//let's try to run a loop on Map.
for(let country of countries){
    //console.log(country);
}

/**
 * Output ::
 * (2) ['IN', 'India']
 * (2) ['USA', 'United states of America']
 * (2) ['PAK', 'Pakistan']
 */

//can Map has lenght property?
//console.log(countries.length);          //ans : no, Map dosen't have length property.
//const checkCountry = countries.clear();         //clear method used to clear the map elements.
//console.log(checkCountry);                      //Output : undefined
//console.log(countries);                         //Output : Map(0) {size: 0}

console.log(countries.delete('IN'));        //delete method is used to delete any specific key-value pairs
console.log(countries);             
//Output : Map(2) {'USA' => 'United states of America', 'PAK' => 'Pakistan'}

for(let [key, vlaue] of countries){
    //console.log(key);                       //Output : USA PAK
    //console.log(vlaue);                     //United states of America
}

//for-in-loop       :: gives us the index vlaue of each elements

for(let fighters in freedomFighters){
    //console.log(fighters);
}
//Output : 0 1 2 3 

for(let user in userInfo){
    //console.log(user);
}
//Output : name age email

for(let fighter in fighters){
    //console.log(fighter);
}
//Output : 0 1 2 3 4 5 6 7 8 9 10 11

//let's try on Map

// for(let country in countries){
//     console.log(country);                    //By this method we can't do the same like other iterables.
// }                               

// for(let [symbol, name] in countries){
//     console.log(symbol);
//     console.log(name);
// }

//We can not run for in loop on Map and objects.

/************************************************************* Array Specific methods ***************************************/

//forEach :- This can access three parameters value : (1) Array's element (2) Indexing value (3) Whole array. It takes a callback function as an argument but we can define the function in it.

let naturalNumebrs = [1,2,3,'laxman',4,5,6,7,8,9,10,11,12,13,14,15];
naturalNumebrs.forEach( (number) => {
    //console.log(number);
})

//Output : 1 2 3 4 5 ...............15

//forEach dosen't return any vlaue but we can explicit return the value. But, instead of doing this we used filter method.

const evenNumbers = naturalNumebrs.filter( (num) => {
    if(typeof num === "number"){
        if(num % 2 == 0){
            return num;
        }
    }
    return 0;
} )
console.log(evenNumbers);               //Output : (7) [2, 4, 6, 8, 10, 12, 14]

//can we do the same thing using forEach method? :- yes, we can do.

const oddNumber = [];
naturalNumebrs.filter( (num) => {
    if(typeof num === 'number'){
        if(num % 2 != 0){
            oddNumber.push(num);
        }
    }
})
console.log(oddNumber);             //Output : (8) [1, 3, 5, 7, 9, 11, 13, 15]

/************************************************************** Real world project *****************************************/

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//Print the books which is published after 2000

const publishBook = books.filter( (bk) => {
    if(bk.publish >= 2000){
        return bk
    }
    return 0;
})

console.log(publishBook);
//Output : (2) [{…}, {…}]
/**
 0 : {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014}
 1 : {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016}
 */

const NfBooks = [];
books.filter( (bk) => {
    if(bk.genre === 'Non-Fiction'){
        NfBooks.push(bk);
    }
    return 0;
})
console.log(NfBooks);           //Output : (3) [{…}, {…}, {…}]
/**
        0: {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008}
        1: {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010}
        2: {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989}
 */

//Map method :- instead of using forEach method we can simply use map methods. It helps to return any specific value based on the written condition.

const oddNumebrs = naturalNumebrs.map( (num, index, arr ) => {
    if(num % 2 != 0){
        return num;
    }
    //console.log(index);
    // console.log(arr);
    return 0;
})
//console.log(oddNumebrs);
//Output : (16) [1, 0, 3, 'laxman', 0, 5, 0, 7, 0, 9, 0, 11, 0, 13, 0, 15]  {Unexpected Output}
//Output : 1 4 6 8 10 12 14
//Output : (16) [1, 2, 3, 'laxman', 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]  :: 7-times {is equal to the number of odd}

/****************************************************** Chaining ********************************************************/

//We can use multiple methods simultaniously.

const number = [1,2,3,4,5,6,7,8,9,10];
const newNumer = number.map( (num) => {
    return num + 10;
}).filter( (num) => {
    if(typeof num === 'number'){
        if(num % 2 == 0){
            return num
        }
    }
    return 0;
})
console.log(newNumer);      //Output : (5) [12, 14, 16, 18, 20]

//Reduce methods :- It is widely used meethod in javascript to get sum of an array. There are three key-points that we should keep in our mind.

/**
 * (1). Initial value :- for accumulator
 * (2). accumulator :- is the sum of accumulator and currentvalue
 * (3). current value :- is the current vlaue of the array
 */

const userCart = [
    {
        itemName : 'Samsung-Tab',
        itemPrice : 18000
    },
    {
        itemName : 'lenovo-ideapad-slim-3 Laptop',
        itemPrice : 24000
    },
    {
        itemName : 'pc',
        itemPrice : 35500
    },
    {
        itemName : 'oppo-k10 smart-phone',
        itemPrice : 18000
    },
    {
        itemName : 'maono-mic',
        itemPrice : 2600
    }
]

const totalAmount = userCart.reduce( (acc, current) => {
    if(typeof current.itemPrice === 'number'){
        return (acc + current.itemPrice);
    }   
}, 0)
console.log(totalAmount);           //Output : 98100