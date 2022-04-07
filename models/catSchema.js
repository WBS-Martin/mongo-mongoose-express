const mongoose = require('mongoose')
const { Schema } = mongoose

const catSchema = new Schema({
  name: String,
})

module.exports = mongoose.model('Cat', catSchema)
