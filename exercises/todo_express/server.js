const express = require('express')
const app = express()
const uuidV4 = require("uuid/v4")

let todos = [
    {
        name: "Get milk",
        description: "1-gallon, whole milk",
        imageUrl: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjxzfeixdrhAhWPuZ4KHa1HDUcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.target.com%2Fp%2Fwhole-milk-vitamin-d-1gal-market-pantry-153%2F-%2FA-13276134&psig=AOvVaw39OJ3FznzRC-_jMSrX49Ym&ust=1555707788066143",
        completed: false,
        _id: uuidV4()
    },
    {
        name: "Get OJ",
        description: "0.5 gallon, low-pulp",
        imageUrl: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwje07WOz9rhAhUR0lQKHdpLDAYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.simplyorangejuice.com%2Frecipes%2Froasted-pumpkin-seeds&psig=AOvVaw2TzwHhf7r1BBNtfTOSZcRI&ust=1555710430995581",
        completed: false,
        _id: uuidV4()
    },
]

// The middle ware that is used for all requests
app.use(express.json())

// GET ALL (GET COLLECTION OF OBJECTS) - This allows the user to request a collection of objects.
// This also sets up the end point for that request.
app.get("/todos", (req, res) =>{
    res.send(todos)
})

// GET ONE - This allows the user to request one single item [by _id]
app.get("/todos/:_id", (req, res) =>{
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    res.send(foundTodo)
})

// POST - POST ONE - This allows the user to add one todo item.
app.post("/todos", (req, res) =>{
    const newTodo = req.body // req.body is Object from POST and PUT request
    newTodo._id = uuidV4()
    todos.push(newTodo)
    res.send(todos)
})

// DELETE - Delete one - This allows the user to delete one todo item based on the _id.
app.delete("/todos/:_id", (req, res) => {
    const todoToDelete = todos.find(todo => todo._id === req.params._id)
     // returns array of updated DB
    todos = todos.filter(todo => todo._id !== todoToDelete._id)
    res.send(todos)
})

// PUT - Update One object by ID
app.put("/todos/:_id", (req, res) =>{
    const todoToUpdate = todos.find(todo => todo._id === req.params._id)
    const updatedTodo = Object.assign(todoToUpdate, req.body)
    todos = todos.map(todo => todo._id === updatedTodo._id ? updatedTodo : todo)
    res.send(todos)
})






app.listen(8182, ()=>{
    console.log("Server is running on port 8182")
})