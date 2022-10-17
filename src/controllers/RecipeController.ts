import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { copyFileSync } from "fs";
import { ParsedQs } from "qs";
import { Recipe } from "../models/Recipe";
import { CrudController } from "./CrudController";

export class RecipeController extends CrudController{
    public read(req: Request, res: Response): void{
        Recipe.findByPk(req.params.id)
        .then((recipe) => res.json(recipe))
        .catch(error => {
            console.log(error);
            res.send('no recipe found');
        });
    }

    public showOne(req: Request, res: Response): void{
        Recipe.findOne({ where: { name:req.params.name } })
        .then((recipe) => res.json(recipe))
        .catch(error => {
            console.log(error)
            res.send('no recipe found');
        });
    }

    public create(req: Request, res: Response): void {
        Recipe.create(req.body)
        .then(recipe => res.json(recipe))
        .catch(err => {
            console.log(err);
            res.json({"message":"Insertion impossible"});
        });
    }

    public update(req: Request, res: Response): void {
        let id = req.params.id;
        let recipeUpdate = req.body;

        Recipe.findByPk(id)
        .then(recipe => {
            if (recipe !== null){
                recipe.set(recipeUpdate);
                recipe.save();
                res.json({"message":"Modification effectué"});
            }
            else{
                res.json({"message":"no recipe with id : $(id)"})
            }

        })
        .catch(err => {
            console.log(err);
            res.json({"message":"Modification impossible"});
        })
    }
}