import { hash } from "bcrypt";
import { createDiffieHellmanGroup } from "crypto";
import status from "http-status";
import { BCRYPT_ROUND } from "../config/constants";
import { User } from "../models/User";
import { CrudController } from "./CrudController";

export class AuthenticateController extends CrudController {

    //Inscription
    //req: Request,
    public signin(req: Re quest, res: Response):void{
        let userInfo = req.body!;
        hash(userInfo.password, BCRYPT_ROUND)
            .then(hashedPassword =>{
                userInfo.password = hashedPassword;

                User.create(userInfo)
                .then(user =>{
                    let name = user.lastname;
                    let msg = "L'utilisateur " + name + " a bien été ajouté";
                    res.json({"message": msg})
                })
                .catch(err => {
                    console.log(err);
                    res.json({"message":"Insertion impossible"});
                })
            })
            .catch(err =>{
                console.log(err);
                res.json({"message":"Insertion impossible"});
            });
    }

    //Authentification
    public login(req:Request, res: Response):void{
        let userInfo = req.body;
    }
}