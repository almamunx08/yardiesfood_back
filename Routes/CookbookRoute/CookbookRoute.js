const express = require('express')
const addRecipeController = require('../../Controllers/CookbookController/addRecipeController')
const cookbookDetails = require('../../Controllers/CookbookController/cookbookDetails')
const createCookbook = require('../../Controllers/CookbookController/createCookbook')
const getAllCookbook = require('../../Controllers/CookbookController/getAllCookbook')
const myAllCookbook = require('../../Controllers/CookbookController/myAllCookbook')
const whoIs = require('../../Middleware/whois')
const CookbookRoute = express.Router()

CookbookRoute.post('/save', whoIs, createCookbook)
CookbookRoute.get('/my', whoIs, myAllCookbook)
CookbookRoute.post('/add-recipe', whoIs, addRecipeController)
CookbookRoute.get('/:id', cookbookDetails)
CookbookRoute.get('/',  getAllCookbook)

module.exports = CookbookRoute