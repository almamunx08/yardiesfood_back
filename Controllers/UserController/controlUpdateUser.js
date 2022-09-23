const UserModel = require("../../Models/UserModel")
const jwt = require('jsonwebtoken');

const controlUpdateUser = (req, res) => {
   const {id} = req.user
   const {name, bio, username, website} = req.body
   UserModel.findById(id)
   .then(dbres=>{
      if(name) dbres.name = name;
      if(bio) dbres.bio = bio;
      if(username) dbres.username = username;
      if(website) dbres.website = website;
      dbres.save()
      .then((result)=>{
         const {_id, name, email, username} = result
         const KEY = process.env.JWT_PRIVATE
         const token = jwt.sign({ id:_id, name, email, username }, KEY)
         res.send({status:'updated successfully', data: token})
      })
   })
}

module.exports = controlUpdateUser