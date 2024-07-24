const parentContainer = document.getElementById("parent");
const addBtn = document.getElementById("addBtn");
const delBtn = document.getElementById("deleteBtn");
const deleteParentContainerChild = document.getElementById("delParentChild");
const changeRedToBlackBtn = document.getElementById("changeRedToBlack");

const childParentDiv = document.getElementById("otherDiv");

const findChildContianer = document.querySelector(".child-3");

addBtn.addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "child child-4");
  parentContainer.appendChild(newDiv);
});

deleteParentContainerChild.addEventListener("click", () => {
  parentContainer.children[0].remove();
});

delBtn.addEventListener("click", () => {
  childParentDiv.children[0].remove();
});

changeRedToBlackBtn.addEventListener("click", () => {
  findChildContianer.setAttribute("class", "child black");
});

let observer = new MutationObserver((data) => {
  console.log(data);
  if (data[0].removedNodes.length === 1) {
    window.alert("Element removed successfully");
  } else if (data[0].addedNodes.length === 1) {
    window.alert("A new element is added");
  } else if (data[0].type === "attributes") {
    window.alert("A children attribute has been changed");
  } else if (data[0].type === "characterData") {
    window.alert("Content has been changed");
  }

  console.log(data[0].target);
  console.log(data[0].type);
});

const config = {
  childList: true,
  subtree: true,
  attributes: true,
  characterDataOldValue: true,
};

observer.observe(parentContainer, config);
