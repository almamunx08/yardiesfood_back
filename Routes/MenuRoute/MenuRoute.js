const express = require('express')
const menuController = require('../../Controllers/MenuController/MenuController')
const whoIs = require('../../Middleware/whois')
const MenuRoute = express.Router()

MenuRoute.post('/save', whoIs, menuController )

module.exports = MenuRoute