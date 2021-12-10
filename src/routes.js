import { Router } from 'express';
import { User } from './routes/user.routes';

export default class setup {
    exportRoutes() {
        const routes = new Router();
        const prefix = '/api'

        routes.use(`${prefix}/user`, User.setup());
    };
};