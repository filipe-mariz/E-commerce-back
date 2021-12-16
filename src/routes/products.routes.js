import { Router } from 'express';
import ProductController from '../app/controller/product';

export default new class Product {
    routes () {
        const router = new Router();

        router.post('/', ProductController.createAction);
        router.get('/:id?', ProductController.indexAction);
        router.put('/:id', ProductController.updateAction);
        router.delete('/:id', ProductController.deleteAction);
    }
}