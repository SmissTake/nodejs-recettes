require('dotenv').config();

import cors, { CorsOptions } from 'cors';
import express from 'express';
import { generateToken } from './authenticate/jwt';
import {PORT} from './config/constants';
import {router} from './routes/recipe';
import { routerAuthenticate } from './routes/authenticate';
import {routerUser} from './routes/user';

const app = express();
const allowOrigins = ['http://localhost:8100'];

const options: cors.CorsOptions = {
    origin: allowOrigins
};

app.use(cors())
app.use(express.json());
console.log('Le token JWT :', generateToken());

app.get('/recipe/show/:id', router);
app.get('/recipe/showone/:name', router);

app.post('/recipe/add', router);

app.put('/recipe/update/:id', router);

app.get('/user/show/:id', routerUser);
app.get('/user/showone/:lastname', routerUser);

app.post('/signin', routerAuthenticate);
app.post('/login', routerAuthenticate);

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});