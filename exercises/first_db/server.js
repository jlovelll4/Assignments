const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = process.env.PORT || 8182
const mongoose = require('mongoose')

// Middleware
app.use(express.json())
app.use(morgan('dev'))


// Connect to MongoDB. Default port is 27017
mongoose.connect("mongodb://localhost:27017/got-characters", {useNewUrlParser: true}, () => {
    console.log("Connected to the DB")
})



//Routes
app.use("/characters", require('./routes/thronesRouter.js'))


// Global Server Error Handler - handles ANY error thrown from ANY of our routes above
    // Requires four parameters, which tells express it's for an error
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})












app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})