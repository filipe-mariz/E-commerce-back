import { Router } from 'express';
import ProductController from '../app/controller/product';

const routes = new Router();

routes.post('/', ProductController.createAction);
routes.get('/:id?', ProductController.indexAction);
routes.put('/:id', ProductController.updateAction);
routes.delete('/:id', ProductController.deleteAction);

export default routes;
