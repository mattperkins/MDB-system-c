const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Create Schema and model

const SchemaOne = new Schema({
    name: String,
    weight: Number
})

const User = mongoose.model('user', SchemaOne)

module.exports = User