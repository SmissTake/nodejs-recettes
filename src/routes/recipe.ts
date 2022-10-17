import express from "express";
import { RecipeController } from '../controllers/RecipeController';
import * as Auth from '../middleware/authenticate';

const recipeController = new RecipeController();

export const router = express.Router({
    strict:true
});

router.route('/recipe/show/:id').get(Auth.authorize(['getRecipeList']), recipeController.read);
router.route('/recipe/showone/:name').get(Auth.authorize(['getRecipeList']), recipeController.showOne);
router.route('/recipe/add').post(Auth.authorize(['getRecipeList']),recipeController.create);
router.route('/recipe/update/:id').put(Auth.authorize(['getRecipeList']), recipeController.update);