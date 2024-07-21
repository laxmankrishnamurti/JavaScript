/**
 * Activity : 01
 */

//Task 01

const paraNine = document.getElementById("paraNine");
paraNine.textContent = "This is day-09 of 30 Days JS challenges";

//Task - 02

const taskTwo = document.querySelector(".taskTwo");
taskTwo.style.backgroundColor = "pink";

/**
 * Activity - 02
 */

//Task - 03

const newDiv = document.createElement("div");
newDiv.textContent = "new Div created by JavaScript";
newDiv.style.backgroundColor = "yellow";
document.body.appendChild(newDiv);

//Task - 04

const taskFour = document.getElementById("taskFour");

const newLi = document.createElement("li");
newLi.textContent = "Task four is completed";

taskFour.appendChild(newLi);

/**
 * Activity - 03
 */

//Task - 05

const twoContainer = document.querySelector(".taskTwo");
twoContainer.remove();

//Task - 06

const taskFourUl = document.querySelectorAll("#taskFour li");
taskFourUl[taskFourUl.length - 1].remove();

/**
 * Activity - 04
 */

//Task - 07

const image = document.getElementById("image");
image.setAttribute("src", "./Day-09/images/two.jpg");
image.setAttribute("width", "300px");

//Task - 08

const taskEight = document.querySelector(".taskEight");
taskEight.removeAttribute("class", "taskEight");
taskEight.setAttribute("class", "taskEightCompleted");

/**
 * Activity - 05
 */

//Task - 09

const taskNineBtn = document.getElementById("taskNine");

taskNineBtn.addEventListener("click", () => {
  const taskNinePara = document.querySelector(".taskNinePara");
  taskNinePara.textContent = "This is task-nine completed";
});

// Task - 10

const taskTen = document.querySelector(".taskTen");
taskTen.addEventListener("mouseover", () => {
  taskTen.style.borderRadius = "2rem";
});

taskTen.addEventListener("mouseout", () => {
  taskTen.style.borderRadius = "";
});
