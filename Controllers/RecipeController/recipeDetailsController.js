const RecipeModel = require("../../Models/RecipeModel")

const recipeDetailsController = (req, res) => {
   RecipeModel.findById(req.params.id)
   .then(result=>{
      res.send({status: 'Recipe Details', data: result})
   })
}
module.exports = recipeDetailsController