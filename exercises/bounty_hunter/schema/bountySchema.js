const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema ({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
      type: String,
      required: true,
    },
    living:  {
        type: Boolean,
        required: true,
        default: true
    },
    bountyamount: {
        type: Number,
        required: true,
    },
    alignswith: {
        type: String,
        required: true,
        enum: ["sith", "jedi"]
    }

})

// mongoose.model(Model Name, Model Blueprint)
module.exports = mongoose.model("Bounty", bountySchema)