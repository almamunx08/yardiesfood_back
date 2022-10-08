const express = require('express')
const saveRecipeController = require('../../Controllers/SaveRecipeController/SaveRecipeController')
const RecipeRoute = express.Router()

RecipeRoute.post('/save', saveRecipeController)

module.exports = RecipeRoute
 