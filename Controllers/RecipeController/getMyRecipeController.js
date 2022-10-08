const RecipeModel = require("../../Models/RecipeModel")

const getMyRecipeController = (req, res) => {
   RecipeModel.find({owner: req.user.id})
   .then(result=>{
      res.send({status:'My All Recipe', data: result})
   })
}
module.exports = getMyRecipeController