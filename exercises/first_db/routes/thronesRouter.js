const express = require('express')
const throneRouter = express.Router()
const Character = require('../models/character.js')

// GET ALL - Sends back an array even if array is empty
throneRouter.get('/', (req, res, next) => {
    Character.find((err, characters) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(characters)
    })
})


// POST One
throneRouter.post('/', (req, res, next) => {
    const newCharacter = new Character(req.body)
    newCharacter.save((err, newSavedObject) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newSavedObject)
    })
})




module.exports = throneRouter