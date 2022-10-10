const CookbookModel = require("../../Models/CookbookModel")

const myAllCookbook = (req, res) => {
   CookbookModel.find({owner: req.user.id})
   .then(result=>{
      res.send({status:'My All Cookbook', data: result})
   })
}
module.exports = myAllCookbook