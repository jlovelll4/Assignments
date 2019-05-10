const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../schema/bountySchema.js')


// GET ALL - Returns array of objects (collection), or empty array.
bountyRouter.get("/", async (req, res, next) =>{
    try {
        const bounties = await Bounty.find()
        return res.status(200).send(bounties)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})

// GET One
bountyRouter.get("/:_id", (req, res, next) =>{
    Bounty.findOne({_id: req.params._id}, (err, bounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})

 // UPDATE ONE - PUT
bountyRouter.put("/:_id", (req, res, next) => {
    Bounty.findOneAndUpdate({_id: req.params._id}, req.body, {new: true} , (err, updatedBounty)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedBounty)
    })
})


// DELETE ONE - DELETE
bountyRouter.delete("/:_id", (req, res, next) => {
    Bounty.findOneAndRemove({_id: req.params._id}, (err, delBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(delBounty)
    })
})

// POST ONE
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})


module.exports = bountyRouter