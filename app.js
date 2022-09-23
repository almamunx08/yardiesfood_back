require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const AuthRoute = require('./Routes/AuthRoute/AuthRoute');
const UserRoute = require('./Routes/UserRoute/UserRoute');
const whoIs = require('./Middleware/whois');
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.use('/api/auth', AuthRoute)
app.use('/api/user', whoIs, UserRoute)

app.listen(PORT, function () {
    console.log("Listening on port "+PORT);
});

mongoose.connect(process.env.DB, ()=>{
    console.log('Database  Connected');
})