import { compare, hash } from "bcrypt";
import status from "http-status";
import { generateToken } from "../authenticate/jwt";
import { BCRYPT_ROUND } from "../config/constants";
import { User } from "../models/User";
import { CrudController } from "./CrudController";

export class AuthenticateController extends CrudController {

    //Inscription
    //req: Request,
    public signin(req: Request, res: Response):void{
        let userInfo = req.body!;
        hash(userInfo.password, BCRYPT_ROUND)
            .then(hashedPassword =>{
                userInfo.password = hashedPassword;

                User.create(userInfo, {fields:['firstname', 'lastname', 'password', 'mail']})
                .then(user =>{
                    let name = user.lastname;
                    let msg = `L'utilisateur ${name} a bien été ajouté`;
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
    // public login(req:Request, res: Response):void{
    //     let userInfo = req.body;
    //     hash(userInfo.password, BCRYPT_ROUND)
    //         .then(hashedPassword => {
    //             compare(hashedPassword, 
    //             User.findOne({where: {mail:userInfo.mail}})
    //                 .then((user) => res.json(user.password))
    //                 .catch(err => {
    //                     console.log(error);
    //                     res.send('No user with this login');
    //                 }))
    //         })
    // }

    public async login (req: Request, res: Response):Promise<void>{
        const plainPassword = req.body.password;
        const mail = req.body.mail;

        const user = await User.findOne({ where: {mail:mail}});

        if(user === null){
            res.status(status.UNAUTHORIZED).json('Invalid credentials');
            return;
        }

        const bMatch = await compare(plainPassword, user!.password);
        if(!bMatch){
            res.status(status.UNAUTHORIZED).json('Invalid credentials');
        }

        res.status(status.OK).json({'token':generateToken()});
    }
}