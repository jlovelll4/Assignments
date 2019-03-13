var h1 = document.createElement("h1");
h1.className = "header";
h1.textContent = "Javascript Made this!!";

var sub = document.createElement("h4");
sub.innerHTML="<span class='name'>James</span> wrote the JavaScript";

var div = document.createElement("div");
div.className = "header";

div.appendChild(h1);
div.appendChild(sub);

document.body.prepend(div);

var clear = document.getElementById("clear-button")

clear.addEventListener("click", function(){
    // code to clear out 
})
var messages = document.getElementsByClassName("message")

messages[0].textContent = "first"
messages[1].textContent = "second"
messages[2].textContent = "third"
messages[3].textContent = "fourth"
// document.getElementById()
// var span = document.createElement("span")
// span.className = "name"
// span.textContent = "James Lovell"
// document.body.prepend(span)


// var addButton = getElementById("add")

// addButton.addEventListener("click", function(){
//     var inputBox = document.getElementById("ID name from HTML")
//     var inputText = inputBox.value
//     addButton.textContent = inputText
// })