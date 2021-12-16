import { Router } from 'express';
import User from './routes/user.routes';
import Product from './routes/products.routes';

export default class setup {
    exportRoutes() {
        const routes = new Router();
        const prefix = '/api'

        routes.use(`${prefix}/user`, User.routes());
        routes.use(`${prefix}/products`, Product.routes());
    };
};