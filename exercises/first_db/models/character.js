const mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    house: {
        type: String,
        required: true,
        enum: ["winterfell", "tarley", "lamnister"]
    },
    isALive: {
        type: Boolean,
        default: true
    }
})
                    // mongoose.model(Model name, Model Blueprint)
module.exports = mongoose.model("Character", characterSchema)