import { Router } from 'express';
import {User} from './routes/user.routes';

return setup = () => {
    const routes = new Router();
    const prefix = 'api/'

    routes.use(`${prefix}/user`, User.setup());
}