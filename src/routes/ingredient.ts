import express from "express";
import { IngredientController } from '../controllers/IngredientController';
import * as Auth from '../middleware/authenticate';

const ingredientController = new IngredientController();

export const routerIngredient = express.Router({
    strict:true
});

routerIngredient.route('/ingredient/show/:id').get(ingredientController.read);
routerIngredient.route('/ingredient/showone/:name').get(Auth.authorize(['getIngredientList']), ingredientController.showOne);
routerIngredient.route('/ingredient/add').post(Auth.authorize(['getIngredientList']),ingredientController.create);
routerIngredient.route('/ingredient/update/:id').put(Auth.authorize(['getIngredientList']), ingredientController.update);