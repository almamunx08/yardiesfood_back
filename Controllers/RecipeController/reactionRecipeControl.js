const RecipeModel = require("../../Models/RecipeModel")

const reactionRecipeController = (req, res) => {
   const userId = req.user.id
   const {reaction, id} = req.params
   RecipeModel.findById(id)
   .then(recipeData=>{
      const isLiked = recipeData.like.indexOf(userId) < 0 ? false : true
      const isUnLiked = recipeData.unlike.indexOf(userId) < 0 ? false : true
      
      // Remove reaction
      if(isLiked && reaction == 'like'){
         recipeData.like = recipeData.like.filter(item=>item != userId)
         recipeData.save()
         .then(()=>{
            res.send({staus: 'Like removed'})
         })
         return 0;
      }
      // Remove reaction
      if(isUnLiked && reaction == 'unlike'){
         recipeData.unlike = recipeData.unlike.filter(item=>item != userId)
         recipeData.save()
         .then(()=>{
            res.send({staus: 'Unlike removed'})
         })
         return 0;
      }
      
      if(isLiked || isUnLiked){
         recipeData.like = recipeData.like.filter(item=>item != userId)
         recipeData.unlike = recipeData.unlike.filter(item=>item != userId)
      }
      recipeData[reaction] = [...recipeData[reaction], userId]
      recipeData.save()
      .then(()=>{
         res.send({status: reaction+'d'})
      })
      
   })

}
module.exports = reactionRecipeController