const mongoose = require('mongoose')
const CookbookSchema = mongoose.Schema({
   name : String,
   owner : mongoose.Schema.Types.ObjectId,
   recipes : [mongoose.Schema.Types.ObjectId]
})

const CookbookModel = mongoose.model('Cookbook', CookbookSchema)