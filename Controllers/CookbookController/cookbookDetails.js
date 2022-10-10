const CookbookModel = require("../../Models/CookbookModel")

const cookbookDetails = (req, res) => {
   console.log(req.params.id, 'param');
   CookbookModel.findById(req.params.id).populate('owner', {name:1, username:1, email: 1, bio:1, website:1}).populate('recipes')
   .then(result=>{
      res.send({status:'Cookbook Details', data: result})
   })
}
module.exports = cookbookDetails