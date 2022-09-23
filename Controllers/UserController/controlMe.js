const UserModel = require("../../Models/UserModel")

const controlMe = (req, res) => {
   const {id} = req.user
   UserModel.findById(id).select({name:1, username:1, email:1})
   .then(result=>{
      res.send(result)
   })
   .catch(err=>{
      res.status(500)
   })
   
}
module.exports = controlMe