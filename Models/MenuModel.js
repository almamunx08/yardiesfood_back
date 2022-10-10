const mongoose = require('mongoose')
const MenuSchema = mongoose.Schema({
   title : String,
   img: String,
   owner : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   }
})

const MenuModel = mongoose.model('Menu', MenuSchema)

module.exports = MenuModel