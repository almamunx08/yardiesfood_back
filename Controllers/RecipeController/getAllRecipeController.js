const RecipeModel = require("../../Models/RecipeModel")

const getAllRecipeControl = (req, res) => {
   RecipeModel.find()
   .then(result=>{
      res.send({status:'All Recipe', data: result})
   })
}
module.exports = getAllRecipeControl