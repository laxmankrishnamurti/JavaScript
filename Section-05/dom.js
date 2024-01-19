//DOM and Events is very important in JavaScript. If once we master both of these then we can say we have a good Understanding about JavaScript.

/**
 * What is DOM?
 * 
 * ans :- When Browser render the HTML files it creates a tree and each part of the tree is consits all the HTML Element. Browser divide all the HTML element into two categories, these are :- (1) Parent Element (2) Child Element
 * 
 * Every Parent elements can have multiple child elements and also child element could have their own child element so because of this they become parent element itself.
 * 
 * ROOT NODE :- Window = Document = HTML {file starts from here}
 */

/**
 * Manupulation Technique 
 * (1) Select the item by their idName, className or TagName
 * (2) Manupulate the item using Events.
 */

const mainHeading = document.getElementById('main-heading');
// console.log(mainHeading);
//Output : <h1 id="main-heading">DOM : Document Object Model<h1>        //let's maupulate this heading.
mainHeading.textContent = 'HERO : DOM (Document Object Model)';         //we got it.
// mainHeading.style.backgroundColor = 'green'
// mainHeading.style.color = 'black';
// mainHeading.style.margin = '1rem'
// mainHeading.style.padding = '1rem'
// mainHeading.style.borderRadius = '0.5rem'
//To assign these type of css is not recomended by using JavaScript. We simply do that using css.

//let's assign attributes to the element

mainHeading.setAttribute('id', 'hero-heading');
console.log(mainHeading);                       //We successfully override it's ID. 

/*************************************** Creating New Element by JavaScript *******************************************/

const newDiv = document.createElement('div');
newDiv.setAttribute('id', 'full-form');
const addText = document.createTextNode('DSA : Data Structure and Algorithms');
newDiv.appendChild(addText);
document.body.appendChild(newDiv);

/*************************************************** Home work Problems ***********************************************/

/**
 * Q :: Create a Unordered list on HTML document and add multiple list-items {programming language item} using JS and optimize it.
 */

//Note : We must avoid to traverse into whole tree for of optimization.


const ul = document.querySelector('#lang-name');
// console.log(ul);         //Just for checking whether the item is selected or not?
const newListItem = (name) => {
    const li = document.createElement('li');
    li.textContent = `${name}`;
    li.setAttribute('class', 'list-name')
    ul.appendChild(li);
    // console.log(li);             //just for checking
}
const langList = ['TypeScript', 'Python', 'golang', 'C++', 'Ruby', 'Rust'];
for(let i = 0; i < langList.length; i++){
    newListItem(langList[i]);
}

/************************************************ Edit Element ****************************************************/

const secondItem = document.querySelector('li:nth-child(2)');
// console.log(secondItem);         //just for checking
const newLi = document.createElement('li');
newLi.textContent = 'C';
newLi.setAttribute('class', 'list-name')
secondItem.replaceWith(newLi);

/************************************************* Changing Outer element ****************************************/

//Change golang outer element

const outElement = document.querySelector('li:nth-child(4)');
// console.log(outElement.textContent);                     //just for checking
outElement.outerHTML = `<li class = 'list-name'>TypeScript</li>`;

/************************************************** Removing Element *********************************************/

//Remove Rust from the list-item

const rust = document.querySelector('li:nth-child(7)');
console.log(rust.textContent);          //just for checking
rust.remove();                         //Deletion successful.