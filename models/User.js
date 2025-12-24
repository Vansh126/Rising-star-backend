const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ["beginner", "intermediate", "advanced"],
        required: true
    },
    email: {
        type: String,
    },
    address: {
        type: String,

    }
})
module.exports = mongoose.model("User", userSchema)
