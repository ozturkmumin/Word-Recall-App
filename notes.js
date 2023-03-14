const form = document.querySelector("form");
const addnotes = document.querySelector("#notes");
const addmeaning = document.querySelector("#add-meaning");
const btnDeleteAll = document.querySelector("#clearbtn");
const taskList = document.querySelector("#myword");
let createItem;
eventListeners();
loadItems();

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

function setItemToLS(text) {
     createItem = getItemsFromLs();
     createItem.push(text);
     localStorage.setItem("createItem", JSON.stringify(createItem));
}

function deleteItemFromLS(text) {
     createItem = getItemsFromLs();
     createItem.forEach(function (item, index) {
          if (item === text) {
               createItem.splice(index, 1);
          }
     });
     localStorage.setItem("createItem", JSON.stringify(createItem));
}

function createItemFn(text) {
     const li = document.createElement("span");
     li.appendChild(document.createTextNode(text));

     const a = document.createElement("a");
     a.classList = "delete-item float-right";
     a.setAttribute("href", "#");
     a.innerHTML = '<i class = "fas fa-times"></i>';

     li.appendChild(a);

     taskList.appendChild(li);
}
function deleteItem(e) {
     if (e.target.className === "bi bi-x-lg") {
          e.target.parentElement.parentElement.remove();

          deleteItemFromLS(e.target.parentElement.parentElement.textContent);
     }
     e.preventDefault();
}

function addNewItem(e) {
     if (addnotes.value === "") {
          alert("add new item");
     }

     const li = document.createElement("span");

     li.appendChild(document.createTextNode(addnotes.value));
     li.appendChild(document.createTextNode(addmeaning.value));
     const div = document.createElement("div");

     li.appendChild(div);

     taskList.appendChild(li);
     setItemToLS(addnotes.value);
     addnotes.value = "";
     setItemToLS(addmeaning.value);
     addmeaning.value = "";

     e.preventDefault();
}
function deleteAllItems(e) {
     if (confirm("are you sure")) {
          while (taskList.firstChild) {
               taskList.removeChild(taskList.firstChild);
          }
          localStorage.clear();
     }
     e.preventDefault();
}
btnDeleteAll.addEventListener("click", () => {
     localStorage.clear();
     location.reload();
});
