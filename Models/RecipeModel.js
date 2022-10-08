
const mongoose = require('mongoose')
const RecipeSchema = mongoose.Schema({
   title : String,
   courses : Array,
   preparationTime: Number,
   servingSize: Number,

   ingredient : [{
      name : String,
      description: String,
      quantity: Number,
      measurementUnit : String
   }],

   directions : [{
      step: String,
      img : String,
   }],
   note : String
})

const RecipeModel = mongoose.model("Recipe", RecipeSchema)

module.exports = RecipeModel