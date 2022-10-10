const CookbookModel = require("../../Models/CookbookModel")

const addRecipeController = (req, res) => {
   const {cookbookId, recipes} = req.body
   CookbookModel.findById(cookbookId)
   .then(result=>{
      result.recipes = [...result.recipes, ...recipes]
      result.save()
      .then(()=>{
         res.send({status:'Recipe Added'})
      })
   })
}
module.exports = addRecipeController