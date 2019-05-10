const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

// Global Middleware
app.use(express.json())
app.use(morgan('dev'))

//DB Connection
mongoose.connect(
    'mongodb://localhost:27107/test',
    {useNewUrlParser: true},
    () => {console.log('Connected to the DB')}
)

// Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    return res.status(500).send({errMsg: err.message})
})

// Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))