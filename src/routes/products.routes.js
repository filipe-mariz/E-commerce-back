import { Router } from 'express';
import Product from '../app/controller/product';

class ProductRoute extends Product {
    constructor () {
        super()

        this.routes = new Router();
    };

    setup() {
        this.routes.post('/', this.createAction);
        this.routes.get('/:id?', this.indexAction);
        this.routes.put('/:id', this.updateAction);
        this.routes.delete('/:id', this.deleteAction);

        return this.routes;
    };

};

export default ProductRoute;
