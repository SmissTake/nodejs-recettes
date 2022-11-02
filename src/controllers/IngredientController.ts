import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import { sequelize } from "../config/database";
import { Ingredient } from "../models/Ingredient";
import { CrudController } from "./CrudController";

export class IngredientController extends CrudController{
    public async read(req: Request, res: Response): Promise<void>{
        // Ingredient.findByPk(req.params.id)
        // .then((ingredient) => res.json(ingredient))
        // .catch(error => {
        //     console.log(error);
        //     res.send('no ingredient found');
        // });
        const ingredient = await sequelize
            .query('SELECT * FROM ingredients WHERE id=?', {
                replacements: [req.params.id],
                type: QueryTypes.SELECT,
            });
            console.log('log', ingredient[0]);
            res.json(ingredient[0]);
    }

    public showOne(req: Request, res: Response): void{
        Ingredient.findOne({ where: { name:req.params.name } })
        .then((ingredient) => res.json(ingredient))
        .catch(error => {
            console.log(error)
            res.send('no ingredient found');
        });
    }

    public create(req: Request, res: Response): void {
        Ingredient.create(req.body)
        .then(ingredient => res.json(ingredient))
        .catch(err => {
            console.log(err);
            res.json({"message":"Insertion impossible"});
        });
    }

    public update(req: Request, res: Response): void {
        let id = req.params.id;
        let ingredientUpdate = req.body;

        Ingredient.findByPk(id)
        .then(ingredient => {
            if (ingredient !== null){
                ingredient.set(ingredientUpdate);
                ingredient.save();
                res.json({"message":"Modification effectué"});
            }
            else{
                res.json({"message":"no ingredient with id : $(id)"})
            }

        })
        .catch(err => {
            console.log(err);
            res.json({"message":"Modification impossible"});
        })
    }
}