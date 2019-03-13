var square = document.getElementById("square")

square.addEventListener("mouseover", function(e){
    square.style.backgroundColor = "blue"
    // Another way to do this is below
})
// square.onmouseover = function(e){
//     square.style.backgroundColor = "blue"
// }

square.addEventListener("mousedown", function(){
    square.style.backgroundColor = "red"
})
square.addEventListener("mouseup", function(){
    square.style.backgroundColor = "yellow"
})
square.addEventListener("dblclick", function(){
    square.style.backgroundColor = "green"
})
window.addEventListener("mouseover",function(e){
    square.style.backgroundColor = "orange"
})
window.addEventListener("keypress.",function(e){
    square.style.backgroundColor = "orange"
})
