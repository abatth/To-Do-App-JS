"use strict";

/* NEED TO FINISH LOCAL STORAGE */
const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.querySelector(".list");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent from submitting

  const itemText = input.value;

  if (itemText) {
    const listItem = document.createElement("li");
    listItem.innerText = itemText;
    list.appendChild(listItem);

    listItem.addEventListener("click", () => {
      //console.log("testing");
      listItem.classList.toggle("complete");
      // UpdateLocalStorage();
    });

    //when user right clicks on item delete it from list
    listItem.addEventListener("contextmenu", (e) => {
      e.preventDefault(); //prevent menu to pop up
      listItem.remove(); //delete the item
      //UpdateLocalStorage();
    });

    //clear the input once you enter an item
    input.value = "";

    //UpdateLocalStorage();
  }
});

function UpdateLocalStorage() {
  const todoList = [];

  const listItems = document.querySelectorAll("li");

  listItems.forEach((listItem) => {
    todoList.push({
      text: listItem.innerText,
      completed: listItem.classList.contains("complete"),
    });
  });

  localStorage.setItem("todoList", JSON.stringify(todoList));
}
