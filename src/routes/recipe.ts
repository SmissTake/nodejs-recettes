import express from "express";
import { RecipeController } from '../controllers/RecipeController';
import * as Auth from '../middleware/authenticate';

const recipeController = new RecipeController();

export const router = express.Router({
    strict:true
});

router.route('/recipe/show/:id').get(Auth.authorize(['Administrateur']), recipeController.read);
router.route('/recipe/showone/:name').get(Auth.authorize(['Administrateur']), recipeController.showOne);
router.route('/recipe/list/:id').get(Auth.authorize(['Administrateur']), recipeController.list)
router.route('/recipe/add').post(Auth.authorize(['Administrateur']),recipeController.create);
router.route('/recipe/update/:id').put(Auth.authorize(['Administrateur']), recipeController.update);