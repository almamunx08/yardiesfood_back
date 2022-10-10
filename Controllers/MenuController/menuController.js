const MenuModel = require("../../Models/MenuModel")

const menuController = (req, res) => {
   const {title, img} = req.body
   const myMenu = new MenuModel({
      title, img, owner: req.user.id
   })
   myMenu.save()
   .then(()=>{
      res.send({status: 'Menu Saved'})
   })
}
module.exports = menuController