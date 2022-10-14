import { Request, Response } from "express";
import { Recipe } from "../models/Recipe";
import { CrudController } from "./CrudController";

export class RecipeController extends CrudController{
    public read(req: Request, res: Response): void{
        const recipe = Recipe.findByPk(req.params.id).then((recipe) => res.json(recipe)).catch(error => console.log(error));
        if(recipe === null){
            console.log('not found');
            res.send('no recipe found');
        }
        else{
            console.log('Recipe Found');
            res.send(recipe instanceof Recipe);
        }
    }

    public showOne(req: Request, res: Response): void{
        const recipe = Recipe.findOne({ where: { name:req.params.name } }).then((recipe) => res.json(recipe)).catch(error => console.log(error));
        if(recipe === null){
            console.log('not found');
            res.send('no recipe found');
        }
        else{
            console.log('Recipe Found');
            res.send(recipe instanceof Recipe);
        }
    }
}