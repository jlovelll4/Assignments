const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8182

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// MONGODB Connection
mongoose.connect(
    'mongodb://localhost:27107',
    {useNewUrlParser: true},
    () => console.log('Connected to DB')
)

// Routes
app.use('/routename', require('./pathToRouterJSFile'))

// Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    return res.status(500).send({errMsg: err.message})
})

// Server
app.listen(PORT, () => console.log(`Server is connected to port ${PORT}`))

