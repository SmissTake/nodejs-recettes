import { Request, Response } from "express";
import { User } from "../models/User";
import { CrudController } from "./CrudController";

export class UserController extends CrudController{
    public read(req: Request, res: Response): void{
        const user = User.findByPk(req.params.id).then((user) => res.json(user)).catch(error => console.log(error));
        if(user === null){
            console.log('not found');
            res.send('no user found');
        }
        else{
            console.log('User Found');
            res.send(user instanceof User);
        }
    }

    public showOne(req: Request, res: Response): void{
        const user = User.findOne({ where: { lastname:req.params.name } }).then((user) => res.json(user)).catch(error => console.log(error));
        if(user === null){
            console.log('not found');
            res.send('no User found');
        }
        else{
            console.log('User Found');
            res.send(user instanceof User);
        }
    }
}