// const axios = require("axios")
import Axios from "axios"


const myAPI = "https://api.vschool.io/jameslovell/todo"
// axios.get(myAPI).then((response) =>{
//     console.log(response.data)

// })

const newToDO = {
    title: "First To Do"
}

axios.put(myAPI, newToDO).then((response) =>{
    console.log(response.data)
})