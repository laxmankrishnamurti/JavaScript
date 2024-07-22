/**
 * Activity - 01
 */

//Task - 01

const taskOneBtn = document.getElementById("taskOne");
const taskOnePara = document.getElementById("taskOnePara");

taskOneBtn.addEventListener("click", () => {
  taskOnePara.textContent = "Task one is completed";
});

//Task - 02

const chickenBabyImage = document.getElementById("chickenBaby");
const figCaption = document.querySelector("figcaption");
const imageResetBtn = document.getElementById("resetImageBtn");

chickenBabyImage.addEventListener("dblclick", () => {
  chickenBabyImage.setAttribute("class", "block");
  figCaption.setAttribute("class", "block");
  imageResetBtn.setAttribute("class", "show");
});

imageResetBtn.addEventListener("click", () => {
  chickenBabyImage.setAttribute("class", "");
  figCaption.setAttribute("class", "");
  imageResetBtn.setAttribute("class", "block");
});

/**
 * Activity : 02
 */

//Task - 03

const classThreeContainer = document.querySelector(".taskThree");

classThreeContainer.addEventListener("mouseover", () => {
  classThreeContainer.style.backgroundColor = "orange";
});

//Task - 04

const classFourContainer = document.querySelector(".taskFour");

classFourContainer.addEventListener("mouseover", () => {
  classFourContainer.style.backgroundColor = "black";
});

classFourContainer.addEventListener("mouseout", () => {
  classFourContainer.style.backgroundColor = "violet";
});

/**
 * Activity : 03
 */

//Task - 05

const taskFiveInputBox = document.getElementById("taskFive");
taskFiveInputBox.addEventListener("keydown", (e) => {
  //   console.log(e.key);
});

//Task - 06

const taskSixInputBox = document.getElementById("taskSix");
const inputValueBox = document.querySelector(".inputValue");

taskSixInputBox.addEventListener("keyup", (e) => {
  if (e.key === "Backspace") {
    return;
  } else {
    inputValueBox.textContent += e.key;
  }
});

/**
 * Activity - 04
 */

//Task - 07

const taskSevenForm = document.querySelector(".taskSevenForm");
const inputBox = document.getElementById("taskSeven");

taskSevenForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Input value is : ", inputBox.value);
  inputBox.value = "";
});

//Task - 08

const selectionArea = document.getElementById("city");
const showPara = document.querySelector(".taskEightPara");

selectionArea.addEventListener("click", () => {
  showPara.setAttribute("class", "taskEightPara");
  showPara.textContent = `You selected "${selectionArea.value}"`;
});

/**
 * Activity - 05
 */

//Task - 09

const parent = document.getElementById("taskNine");

parent.addEventListener("click", (e) => {
  if (e.target && e.target.matches("li.child-item")) {
    console.log(`List item ${e.target.textContent} clicked`);
  }
});

//Task - 10

const parentContainer = document.getElementById("taskTen");
const addListBtn = document.getElementById("addList");

let initial = 4;
addListBtn.addEventListener("click", () => {
  const newList = document.createElement("li");
  newList.textContent = `List List ${initial}`;
  initial++;

  parentContainer.appendChild(newList);
});

// Create a MutationObserver to detect changes to the parentContainer
const observer = new MutationObserver((mutationsList) => {
  console.log("mutaionsList :: ", mutationsList);
  for (let mutation of mutationsList) {
    if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
      for (let node of mutation.addedNodes) {
        if (node.nodeName === "LI") {
          window.alert("New list item added: " + node.textContent);
        }
      }
    }
  }
});

// Configuration of the observer to watch for child elements being added
const config = { childList: true };

// Start observing the parentContainer
observer.observe(parentContainer, config);
