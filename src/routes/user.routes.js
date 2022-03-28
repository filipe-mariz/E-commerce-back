import { Router } from 'express';
import UserController from '../app/controller/user';

const routes = new Router();

routes.post('/', UserController.createAction);
routes.get('/:id?', UserController.readAction);
routes.put('/:id', UserController.updateAction);
routes.delete('/:id', UserController.deleteAction);

export { routes };