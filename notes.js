const savenote = document.querySelector("#save-note");
const addnote = document.querySelector("#add-note");
const form = document.querySelector("form");
eventListeners();

function eventListeners() {
     form.addEventListener("submit", addNewItem);
}
function loadItems() {
     createItem = getItemsFromLs();

     createItem.forEach(function (item) {
          createItemFn(item);
     });
}
function getItemsFromLs() {
     if (localStorage.getItem("createItem") === null) {
          createItem = [];
     } else {
          createItem = JSON.parse(localStorage.getItem("createItem"));
     }
     return createItem;
}

function addNewItem(e) {
     e.preventDefault();
     const div = document.createElement("div");
     div.innerText = addnote.value;
     savenote.appendChild(div);
}
