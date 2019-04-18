const express = require('express')
const app = express()
console.log(app)


// Server Route
app.get("/JamesLovell", (req, res) =>{
    res.send("Hello World!")
})




app.listen(8000, () => {
    console.log("Server is Running on Port 8000")
})