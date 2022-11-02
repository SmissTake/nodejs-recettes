require('dotenv').config();

import cors, { CorsOptions } from 'cors';
import express from 'express';
import { generateToken } from './authenticate/jwt';
import {PORT} from './config/constants';
import {router} from './routes/recipe';
import { routerAuthenticate } from './routes/authenticate';
import {routerUser} from './routes/user';
import { routerIngredient } from './routes/ingredient';

const app = express();
const allowOrigins = ['http://localhost:8100'];

const options: cors.CorsOptions = {
    origin: allowOrigins
};

if(process.env.NODE_ENV !== 'production'){
    console.log('Le token JWT :', generateToken("tanguy", "gwion.tanguy@my-digital-school.org", "Administrateur"));
}

app.use(cors())
app.use(express.json());

app.get('/recipe/show/:id', router);
app.get('/recipe/showone/:name', router);
app.get('/recipe/list/:id', router);

app.post('/recipe/add', router);

app.put('/recipe/update/:id', router);

app.get('/ingredient/show/:id', routerIngredient);
app.get('/ingredient/showone/:name', routerIngredient);

app.post('/ingredient/add', routerIngredient);

app.put('/ingredient/update/:id', routerIngredient);

app.get('/user/show/:id', routerUser);
app.get('/user/showone/:lastname', routerUser);

app.post('/user/signin', routerAuthenticate);
app.post('/user/login', routerAuthenticate);

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});