import { Request, Response } from "express";
import { User } from "../models/User";
import { CrudController } from "./CrudController";

export class UserController extends CrudController{
    public read(req: Request, res: Response): void{
        User.findByPk(req.params.id)
        .then((user) => res.json(user))
        .catch(error => {
            console.log(error)
            res.send('no user found');
        });
    }

    public showOne(req: Request, res: Response): void{
        User.findOne({ where: { lastname:req.params.name } })
        .then((user) => res.json(user))
        .catch(error => {
            console.log(error);
            res.send('no User found');
        });
    }
}