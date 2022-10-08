const express = require('express')
const getAllRecipeControl = require('../../Controllers/RecipeController/getAllRecipeController')
const recipeDetailsController = require('../../Controllers/RecipeController/recipeDetailsController')
const saveRecipeController = require('../../Controllers/RecipeController/SaveRecipeController')
const RecipeRoute = express.Router()

RecipeRoute.post('/save', saveRecipeController)
RecipeRoute.get('/:id', recipeDetailsController)
RecipeRoute.get('/', getAllRecipeControl)

module.exports = RecipeRoute
 