const CookbookModel = require("../../Models/CookbookModel")

const getAllCookbook = (req, res) => {
   CookbookModel.find()
   .then(result=>{
      res.send({status:'All Cookbook', data: result})
   })
}
module.exports = getAllCookbook