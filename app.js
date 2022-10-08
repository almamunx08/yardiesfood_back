require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const AuthRoute = require('./Routes/AuthRoute/AuthRoute');
const UserRoute = require('./Routes/UserRoute/UserRoute');
const whoIs = require('./Middleware/whois');
const fileUploadController = require('./Controllers/FileUploadController/FileUploadController');
const PORT = process.env.PORT || 8000
const multer  = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/')
    },
    filename: function (req, file, cb) {
        const fileName = path.parse(file.originalname)
      const uniqueSuffix = Date.now() +"-"+ Math.round(Math.random() * 1E9)
      cb(null, fileName.name.toLowerCase().split(' ').join('-') + '-' + uniqueSuffix + fileName.ext)
    }
  })
const upload = multer({ storage: storage })

app.use(express.static('./public'))

app.use(cors())
app.use(express.json())

app.use('/api/auth', AuthRoute)
app.use('/api/user', whoIs, UserRoute)
app.use('/api/fileUpload', upload.single('img'), fileUploadController)

app.listen(PORT, function () {
    console.log("Listening on port "+PORT);
});

mongoose.connect(process.env.DB, ()=>{
    console.log('Database  Connected');
})
