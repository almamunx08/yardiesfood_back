const express = require('express')
const controlLogin = require('../../Controllers/AuthController/controlLogin')
const { controlForgetRequest, controlChangePassword } = require('../../Controllers/AuthController/controlPassword')
const controlRegister = require('../../Controllers/AuthController/controlRegister')
const router = express.Router()


router.post('/register', controlRegister)
router.post('/login', controlLogin)
router.post('/forget-request', controlForgetRequest)
router.post('/change-password', controlChangePassword)

module.exports = router