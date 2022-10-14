import express from "express";
import { RecipeController } from '../controllers/RecipeController';
import * as Auth from '../middleware/authenticate';

const recipeController = new RecipeController();

export const router = express.Router({
    strict:true
});

router.route('/recipe/show/:id').get(Auth.authorize(['getRecipeList']), recipeController.read);
//router.route('/recipe/show/:id').get(recipeController.read);
router.route('/recipe/showone/:name').get(recipeController.showOne);