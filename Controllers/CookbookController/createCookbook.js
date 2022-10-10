const CookbookModel = require("../../Models/CookbookModel")

const createCookbook = (req, res) => {
   const {title, img} = req.body
   const myCookbook = new CookbookModel({
      title, img, owner: req.user.id
   })
   myCookbook.save()
   .then(result=>{
      res.send({status:'Cookbook saved'})
   })
}
module.exports = createCookbook