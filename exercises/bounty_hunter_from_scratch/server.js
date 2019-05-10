const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8182

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/bounties", {useNewUrlParser: true}, () => {
    console.log("Connected to the DB!")
})

// Routes
app.use("/bounties", require('./routers/bountyRouter.js'))

// Global Error Handler for the Server
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})