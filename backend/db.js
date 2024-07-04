const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://abhishekujale799:NF5SPkYHK7F2R6Zb@cluster0.afahnsj.mongodb.net/todoapp")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("collection", todoSchema)


module.exports = { todo }