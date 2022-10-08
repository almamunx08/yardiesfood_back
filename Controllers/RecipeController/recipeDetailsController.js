const RecipeModel = require("../../Models/RecipeModel")

const recipeDetailsController = (req, res) => {
   RecipeModel.findById(req.params.id).populate('owner', {name: 1, username: 1, email: 1, bio: 1, website: 1})
   .then(result=>{
      res.send({status: 'Recipe Details', data: result})
   })
}
module.exports = recipeDetailsController