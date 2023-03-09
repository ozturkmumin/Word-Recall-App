// var word = document.getElementById("word-input");
// var meaning = document.getElementById("meaning-input");
// var savebtn = document.getElementById("save");
// var wordlistul = document.getElementById("word-list-ul");

// function eventController(event) {
//      wordlistul.innerHTML = event.target.value;
//      wordlistul.innerHTML = event.target.value;
// }
// word.addEventListener("input", eventController, false);
// meaning.addEventListener("input", eventController, false);
var addwords = document.getElementById("add-words");
var oldwords = document.getElementById("old-words");
var addnotes = document.getElementById("add-notes");
var addfav = document.getElementById("add-fav");
var rememberword = document.getElementById("remember-word");
var writenote = document.getElementById("write-note");
oldwords.addEventListener("click", () => {
     writenote.classList.add("d-none");
     rememberword.classList.add("d-block");
});
