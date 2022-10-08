const RecipeModel = require("../../Models/RecipeModel")

const saveRecipeController = (req, res) => {
   const {title, courses, preparationTime, servingSize, ingredient, directions, note} = req.body
   
   const recipeModel = new RecipeModel({
      title, courses, preparationTime, servingSize, ingredient, directions, note
   })
   recipeModel.save()
   .then(result=>{
      res.send({status: 'Successfully Saved'})
   })
}
module.exports = saveRecipeController