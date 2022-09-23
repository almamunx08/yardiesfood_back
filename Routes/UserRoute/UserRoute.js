const express = require('express')
const controlMe = require('../../Controllers/UserController/controlMe')
const controlUpdateUser = require('../../Controllers/UserController/controlUpdateUser')
const router = express.Router()

router.get('/me', controlMe)
router.post('/update', controlUpdateUser)

module.exports = router
