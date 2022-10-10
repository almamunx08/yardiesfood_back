const mongoose = require('mongoose')
const CookbookSchema = mongoose.Schema({
   title : String,
   img: String,
   owner : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   recipes : [{
      type : mongoose.Schema.Types.ObjectId,
      ref: 'Recipe'
   }]
})

const CookbookModel = mongoose.model('Cookbook', CookbookSchema)

module.exports = CookbookModel