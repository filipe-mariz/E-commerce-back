import { Router } from 'express';
import Product from './routes/products.routes';

class Routes {
    constructor () {
        this.routes = Router();

        this.productRoutes = new Product();
    };

    setup () {
        const prefix = 'api';

        this.routes.use(`${prefix}/products`, this.productRoutes.setup());

        return this.routes;
    };
};

export default Routes;