const express = require('express')
const getAllRecipeControl = require('../../Controllers/RecipeController/getAllRecipeController')
const getMyRecipeController = require('../../Controllers/RecipeController/getMyRecipeController')
const recipeDetailsController = require('../../Controllers/RecipeController/recipeDetailsController')
const saveRecipeController = require('../../Controllers/RecipeController/SaveRecipeController')
const whoIs = require('../../Middleware/whois')
const RecipeRoute = express.Router()

RecipeRoute.post('/save', whoIs, saveRecipeController)
RecipeRoute.get('/my', whoIs, getMyRecipeController)
RecipeRoute.get('/:id', recipeDetailsController)
RecipeRoute.get('/', getAllRecipeControl)

module.exports = RecipeRoute
 