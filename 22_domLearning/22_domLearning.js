const title = document.getElementById("title");
console.log("title Id:", title.id);
console.log("title className:", title.className);
console.log(title.getAttribute("class"));
console.log(title.getAttribute("id"));

// set attribute

// title.setAttribute("class", "head head-title"); // override the previous attribute

title.style.color = "green";
title.style.border = "2px solid white";
title.style.padding = "20px";
title.style.borderRadius = "10px";

// add content

const divContainer = document.getElementById("container");

const containerInnerText = divContainer.innerText; // only show the visible text content
console.log("containerInnerText", containerInnerText) // Title Search on wikipedia

const containerTextContent = divContainer.textContent; // even display the hidden content prevented to displayed on a webpage by CSS.
console.log("containerTextContent", containerTextContent); // Title Search on wikipedia

const containerInnerHTML = divContainer.innerHTML; // gives entire innerHTML in the particular element
console.log(containerInnerHTML) 

// <h1 id="title" class="heading-title" style="color: green; border: 2px solid white; padding: 20px; border-radius: 10px;">Title</h1> <a href="https://wikipedia.org" target="_blank">Search on wikipedia</a>


// querySelector

const containerOne = document.getElementsByClassName("container-1")
const allHeadings = document.querySelectorAll(".heading");
console.log("allHeadings", allHeadings)

// NodeList(5) [h1#one.heading, h2#two.heading, h3#three.heading, h4#four.heading, h5#five.heading]

const secondHeading = document.querySelector("#two");
console.log(secondHeading.innerText);

// support all css selectors

const nameInput = document.querySelector("input[type='text']");
console.log(nameInput);

const firstHeading = document.querySelector("h1:first-child");
console.log(firstHeading);

// unordered list

const myUL = document.querySelector("ul");
const lastItem = myUL.querySelector('li:last-child');
console.log(lastItem);
lastItem.style.backgroundColor = 'red';

// querySelectorAll

const allLI = document.querySelectorAll('li'); // nodeList is not an array but it is similar
allLI.forEach((item) => {
      console.log(item)
})

console.log(allLI[0]);
allLI[1].style.color = "salmon";

// HTMLCollection

const headingLists = document.getElementsByClassName("heading");
console.log(headingLists);
console.log(Array.isArray(headingLists)); // false

const arrHeading = Array.from(headingLists);
console.log(Array.isArray(arrHeading));   // true

arrHeading.forEach((heading, index) => {
      if(index % 2 === 0){
            heading.style.backgroundColor = "green";
            heading.style.color = "blue";
      }
})