const express = require('express')
const app = express()
const uuidv4 = require('uuid/v4')

// Fake Database
const wizards = [
    {
        name: "Harry Potter",
        age: 16,
        isGood: true,
        favClasses: ["Potions", "Defense Against Dark Arts", "Quidditch"],
        hasOwl: true,
        house: "Stair-closet",
        _id: uuidv4()
    },
    {
        name: "Ron Weasley",
        age: 16,
        isGood: true,
        favClasses:["Potions", "Defense Against Dark Arts"],
        hasOwl: false,
        house: "Mystical house",
        _id: uuidv4()
    },
    {
        name: "Belatrix Lestrange",
        age: 40,
        isGood: false,
        favClasses:["Forbidden spells", "Dark magic", "killing good guys"],
        hasOwl: false,
        house: "none/voldemort",
        _id: uuidv4()
    }
]

// Middlewares for every request - Used for POST and PUT request -
app.use(express.json()) // req.body = Object from POST and PUT requests






// Routes - AKA Endpoints
// GET ALL - GET COLLECTION
app.get("/wizards", (req, res)=>{
    res.send(wizards)
})

// GET ONE - GET SINGLE RESOURCE
app.get("/wizards/:_id", (req, res)=>{
    const foundWizard = wizards.find(wizard => wizard._id === req.params._id)
    res.send(foundWizard)
})

// POST - INSERT ONE
app.post("/wizards", (req, res) =>{
    // Get user's post object out of req.body
    const newWizard = req.body
    // Add ID to newWizard
    newWizard._id = uuidv4()
    // Add newWizard to Fake DB
    wizards.push(newWizard)
    // Send back updated DB
    res.send(wizards)
})

// DELETE - Delete One
app.delete("/wizards/:_id", (req, res) =>{
    const wizardToDelete = wizards.find(wizard => wizard._id === req.params._id)
    const updateDB = wizards.filter(wizard => wizard._id !== wizardToDelete._id)
    wizards = updateDB
    res.send(wizards)
})




app.listen(8000, ()=>{
    console.log("Server is running on port 8000")
})
