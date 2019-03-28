// import axios from "./axios.js"
// const axios = require("axios")

// function to pull todos from API

axios.get("https://api.vschool.io/jameslovell/todo/").then((response) =>{
    console.log(response.data);
    for(let i = 0; i < response.data.length; i++){
       createTodo(response.data[i])
    }
    })


document.todo.addEventListener("submit",(e) =>{
    e.preventDefault()
    addToDo()
})

// 
// document.todo.addEventListener("click"), (e) => {
//     e.preventDefault()
//     const document. co
// }
function createTodo(todo){
    const itemContainer = document.createElement("div");
    itemContainer.className = "itemcontainer";

    // make an h1 and give it a title
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = todo.title;

    // make a div tag for our price
    const price = document.createElement("div");
    price.className = "price";
    price.textContent = todo.price

    // make an  a  tag for our image
    const image = document.createElement("img");
    image.src = todo.imgUrl
    image.className = "image";

    // input for checkbox
    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.checked = todo.completed
    checkBox.addEventListener("click", e =>updateChecked(e,todo._id))   

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "delete"
    deleteButton.addEventListener("click", e =>{
        deleteTodo(e, todo._id)
    })

    // append those children inside the container
    itemContainer.append(title);
    itemContainer.append(price);
    itemContainer.append(checkBox);
    itemContainer.append(image);
    itemContainer.append(deleteButton);
    // add that container to the DOM using our wrapper
    document.getElementById("listContainer").append(itemContainer)
}

function addToDo(){
    const title = document.todo.title.value
    const price = document.todo.price.value
    const image = document.todo.image.value
    axios.post("https://api.vschool.io/jameslovell/todo/", {
        title: title,
        price: price,
        image: image
    }).then (response => {
        response.data
    // document.location.reload(true)
    createTodo(response.data)
    })
}

function updateChecked(e, id){
    axios.put("https://api.vschool.io/jameslovell/todo/"+id, {completed: e.target.checked}).then((response)=>{
        console.log(response.data);
    })
}

function deleteTodo(e, id){
    axios.delete("https://api.vschool.io/jameslovell/todo/"+id).then((response)=>{
        e.target.parentNode.remove();
    })
}