//DOM and Events is very important in JavaScript. If once we master both of these then we can say we have a good Understanding about JavaScript.

/**
 * What is DOM?
 * 
 * ans :- When Browser render the HTML files it creates a tree and each part of the tree is consits all the HTML Element. Browser divide all the HTML element into two categories, these are :- (1) Parent Element (2) Child Element
 * 
 * Every Parent elements may have multiple child elements and also child element could have their own child element so because of this they become parent element itself.
 * 
 * ROOT NODE :- Window = Document = HTML {file starts from here}
 */

/**
 * Manupulation Technique 
 * (1) Select the item by their idName, className or TagName
 * (2) Manupulate the item using Events, methods...etc.
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
// newDiv.textContent = '.js :: JavaScript'         //Instead of doing this we create a seperate textNode for this and then we can append in it.
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
const langList = ['TypeScript', 'Python', 'golang', 'C++', 'Ruby', 'Rust', 'React', 'Kotlin'];
for(let i = 0; i < langList.length; i++){
    newListItem(langList[i]);
}

/************************************************ Edit Element ****************************************************/

const secondItem = document.querySelector('li:nth-child(2)');
// console.log(secondItem);         //just for checking

// secondItem.textContent = 'C'        //Instead of doing this we are going to create a seperate list-item and then we append in it for preventing Traversing in Whole DOM.

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

/*************************************************************************** Child to Parent Element and Parent to child  ************************************************************/

const getParent = document.querySelector('#lang-name')
// console.log(getParent);                  //just for checking

//let's check how many children are in the parent element
console.log(getParent.children);

/**
 * Output ::
 * HTMLCollection(8) [li.list-name, li.list-name, li.list-name, li.list-name, li.list-name, li.list-name, li.list-name, li.list-name]
     0: li.list-name
     1: li.list-name
     2: li.list-name
     3: li.list-name
     4: li.list-name
     5: li.list-name
     6: li.list-name
     7: li.list-name
 */

//can we convert all the childrens in an array.

let childrenList = Array.from(getParent.children);
console.log(childrenList);  

/**
 * Output ::
 * [li.list-name, li.list-name, li.list-name, li.list-name, li.list-name, li.list-name, li.list-name, li.list-name]
0: li.list-name
1: li.list-name
2: li.list-name
3: li.list-name
4: li.list-name
5: li.list-name
6: li.list-name
7: li.list-name
*/

for(let i = 0; i < childrenList.length; i++){
    console.log(childrenList[i].textContent);           //or innerHTML
}

/**
 * JavaScript
   C
   Python
   TypeScript
   C++
   Ruby
   React
   Kotlin
 */

console.log(getParent.firstElementChild);
console.log(getParent.lastChild);               //we got it
console.log(getParent.firstElementChild.innerHTML);                 //Output : JavaScript
console.log(getParent.lastElementChild.textContent);                //Output : Kotlin

//getParent element/Node from childNode

console.log(childrenList[1].parentElement.getAttribute('id'));  //getAttribute is a mehtod so that's need an argument.
//Output : lang-name    

/************************************************************** Child to Child ***************************************/

const firstChild = getParent.firstElementChild;
console.log(firstChild.innerHTML);                  //Output : JavaScript
const nextSibling = firstChild.nextElementSibling;
console.log(nextSibling.innerHTML);                 //Output : C

/***************************************************************************** Recap *********************************************************************************/

/**
 * (1) Find Parent Element
 * (2) Instead of putting direct value create new element and then appen in it.
 * (3) Methods ::
 *                  getElementById('id_name')
 *                  getAttribute('which att you want, write here')
 *                  textContent("Write text here")
 *                  setAttribute("attribute", "attribute_Value")
 *                  createTextNode("Write your text here")
 *                  appendChild(type childName)
 *                  querySelector('select element by their id, class or Tag')
 *                  createElement('write element name')
 *                  replaceWith(put reference here)
 *                  variableName.remove()
 * 
 * (4) Select like CSS
 *                      document.querySelector('li:nth-child(n)')
 *                  
 *                      n :- Position of child
 * (5) Traversing from child to Parent and parent to child and Child to child
 *                  parentName.(children)   :: () - is not needed 
 *                  parentName.(firstElementChild)
 *                  parentName.(lastElementChild)
 *                  childName.(nextElementSibling)
 */