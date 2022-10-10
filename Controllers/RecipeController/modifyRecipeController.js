const RecipeModel = require("../../Models/RecipeModel")

const modifyRecipeController = (req, res) => {
   const {recipeId, title, courses, preparationTime, servingSize, ingredient, directions, note} = req.body
   const owner = req.user.id
   
   RecipeModel.findById(recipeId)
   .then(myRecipe=>{
      if(title){myRecipe.title = title}
      if(courses){myRecipe.courses = courses}
      if(preparationTime){myRecipe.preparationTime = preparationTime}
      if(servingSize){myRecipe.servingSize = servingSize}
      if(ingredient){myRecipe.ingredient = ingredient}
      if(directions){myRecipe.directions = directions}
      if(note){myRecipe.note = note}

      myRecipe.save()
      .then(()=>{
         res.send({status: 'Recipe Modified'})
      })
   })
}
module.exports = modifyRecipeController