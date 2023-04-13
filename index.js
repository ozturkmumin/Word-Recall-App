const form = document.querySelector("form");
const addword = document.querySelector("#add-first");
const addmeaning = document.querySelector("#add-meaning");
const btnDeleteAll = document.querySelector("#clearbtn");
const taskList = document.querySelector(".save-word");
const meanList = document.querySelector("#save-mean");
const myword = document.querySelector("#myword");
let createItem;
eventListeners();
loadItems();

function eventListeners() {
     form?.addEventListener("submit", addNewItem);
     taskList.addEventListener("click", deleteItem);
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
     const div = document.createElement("div");
     div.appendChild(document.createTextNode(text));
     div.classList = "d-flex justify-content-center";
     div.classList = "addmean";
     const a = document.createElement("a");
     a.classList = "bi bi-x";
     a.setAttribute("href", "#");
     a.innerHTML = '<i class = "fas fa-times"></i>';

     div.appendChild(a);

     taskList.appendChild(div);
}
function deleteItem(e) {
     if (e.target.className === "bi bi-x-lg") {
          e.target.parentElement.parentElement.remove();

          deleteItemFromLS(e.target.parentElement.parentElement.textContent);
     }
     e.preventDefault();
}

function addNewItem(e) {
     e.preventDefault();
     const div = document.createElement("div");
     const divmean = document.createElement("div");

     div.innerText = addword.value;
     divmean.innerText = addmeaning.value;
     div.classList.add("addmean");
     divmean.classList.add("addmean");
     myword.appendChild(div);
     meanList.appendChild(divmean);

     addword.value = "";
     addmeaning.value = "";

     // localStorage'a kaydetme işlemi
     const words = JSON.parse(localStorage.getItem("words")) || [];
     words.push({ word: addword.value, meaning: addmeaning.value });
     localStorage.setItem("words", JSON.stringify(words));
}
const words = JSON.parse(localStorage.getItem("words")) || [];
for (const { word, meaning } of words) {
     const div = document.createElement("div");
     const divmean = document.createElement("div");
     div.classList.add("addmean");
     divmean.classList.add("addmean");
     div.innerText = word;
     divmean.innerText = meaning;
     myword.appendChild(div);
     meanList.appendChild(divmean);
}

function deleteAllItems(e) {
     localStorage.clear();
     e.preventDefault();
}
btnDeleteAll.addEventListener("click", () => {
     localStorage.clear();
     location.reload();
});
